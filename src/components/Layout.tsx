import { useState } from 'react';
import { TopicList } from './TopicList';
import { ArticleList } from './ArticleList';
import { ArticleViewer } from './ArticleViewer';
import { TopicManager } from './TopicManager';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  const [topicId, setTopicId] = useState<string | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col w-64 flex-shrink-0 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-lg font-semibold">微信阅读器</h1>
          <button
            onClick={() => setIsManageModalOpen(true)}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span className="text-sm">管理</span>
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
    {isManageModalOpen && (
        <TopicManager
          onClose={() => setIsManageModalOpen(false)}
        />
      )}
    </div>
  );
};