import { useEffect, useState } from 'react';
import { TopicData, loadTopics, loadArticles } from '../utils/markdownLoader';
import { hasNewArticles, updateTopicLastCheck } from '../utils/storage';

interface TopicListProps {
  onTopicSelect: (topicId: string) => void;
  selectedTopic: string | null;
  className?: string;
}

export const TopicList: React.FC<TopicListProps> = ({ 
  selectedTopic, 
  onTopicSelect,
  className = ''
}) => {
  const topics = loadTopics();
  const totalTopics = topics.length;
  
  const handleTopicSelect = (topicId: string) => {
    onTopicSelect(topicId);
    updateTopicLastCheck(topicId);
  };
  
  // 获取话题的统计信息
  const getTopicStats = (topicId: string) => {
    const articles = loadArticles(topicId);
    const articleCount = articles.length;
    const latestArticle = articles[0]; // 假设文章已按日期排序
    
    return {
      count: articleCount,
      latestDate: latestArticle?.date 
        ? new Date(latestArticle.date).toLocaleDateString('zh-CN')
        : null
    };
  };

  return (
    <aside className={className}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">微信公众号 #话题列表</h2>
        <div className="mt-1 text-sm text-gray-500">
          共 {totalTopics} 个话题
        </div>
      </div>
      <nav className="p-4">
        {topics.map(topic => {
          const hasNew = hasNewArticles(topic.id, loadArticles(topic.id));
          const stats = getTopicStats(topic.id);
          
          return (
            <button
              key={topic.id}
              onClick={() => handleTopicSelect(topic.id)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 border ${
                selectedTopic === topic.id
                  ? 'bg-blue-50 border-blue-200'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">{topic.source}</span>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">#{topic.title}</span>
                  {hasNew && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
                  <span>{stats.count} 篇文章</span>
                  {stats.latestDate && (
                    <span>最近更新: {stats.latestDate}</span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};