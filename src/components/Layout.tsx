import { useState } from 'react';
import { TopicList } from './TopicList';
import { ArticleList } from './ArticleList';
import { ArticleViewer } from './ArticleViewer';
import { ipcRenderer } from 'electron';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  const [topicId, setTopicId] = useState<string | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);
  const handleRefresh = async () => {
    if (isUpdating) return;

    try {
      setIsUpdating(true);
      await ipcRenderer.invoke('run-python', './main.py');
      window.location.reload();
    } catch (error) {
      console.error('更新失败:', error);
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col w-64 flex-shrink-0 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-lg font-semibold">微信订阅话题</h1>
          <button
            onClick={handleRefresh}
            disabled={isUpdating}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
          >
            {isUpdating ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                更新中...
              </span>
            ) : (
              '刷新'
            )}
          </button>
        </div>
        <TopicList 
          selectedTopic={topicId} 
          onTopicSelect={setTopicId} 
          className="flex-1 overflow-y-auto"
        />
      </div>
      <ArticleList
        topicId={topicId}
        selectedArticle={articleId}
        onArticleSelect={setArticleId}
        className="w-96 flex-shrink-0 border-r border-gray-200 overflow-y-auto"
      />
      <ArticleViewer 
        topicId={topicId}
        articleId={articleId}
        className="flex-1 overflow-hidden"
      />
    </div>
  );
};