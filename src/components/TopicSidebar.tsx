import { useEffect, useState } from 'react';
import { TopicData, loadTopics } from '../utils/markdownLoader';

interface TopicSidebarProps {
  onTopicSelect: (topicId: string) => void;
  selectedTopic: string | null;
}

export const TopicSidebar: React.FC<TopicSidebarProps> = ({ 
  onTopicSelect, 
  selectedTopic 
}) => {
  const [topics, setTopics] = useState<TopicData[]>([]);

  useEffect(() => {
    const loadedTopics = loadTopics();
    setTopics(loadedTopics);
  }, []);

  return (
    <aside className="w-64 min-w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">主题列表</h2>
        <nav className="space-y-1">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={`
                w-full text-left px-4 py-2 rounded-lg transition-colors
                ${selectedTopic === topic.id 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'}
              `}
              onClick={() => onTopicSelect(topic.id)}
            >
              {topic.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};