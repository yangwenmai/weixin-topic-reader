import { useState } from 'react';
import { TopicSidebar } from './TopicSidebar';
import { ArticleList } from './ArticleList';
import { ArticleViewer } from './ArticleViewer';

export const Layout = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-gray-50">
      <TopicSidebar 
        onTopicSelect={(topicId) => {
          setSelectedTopic(topicId);
          setSelectedArticle(null);
        }} 
        selectedTopic={selectedTopic}
      />
      <ArticleList 
        topicId={selectedTopic}
        onArticleSelect={setSelectedArticle}
        selectedArticle={selectedArticle}
      />
      <ArticleViewer 
        topicId={selectedTopic}
        articleId={selectedArticle}
      />
    </div>
  );
}