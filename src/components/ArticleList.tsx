import { useEffect, useState } from 'react';
import { ArticleData, loadArticles } from '../utils/markdownLoader';

interface ArticleListProps {
  topicId: string | null;
  onArticleSelect: (articleId: string) => void;
  selectedArticle: string | null;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  topicId,
  onArticleSelect,
  selectedArticle
}) => {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    if (topicId) {
      const loadedArticles = loadArticles(topicId);
      setArticles(loadedArticles);
    } else {
      setArticles([]);
    }
  }, [topicId]);

  return (
    <aside className="w-72 min-w-72 border-r border-gray-200 bg-white h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
          文章列表
        </h2>
        {!topicId ? (
          <div className="text-gray-500 text-center py-8">
            请先选择一个主题
          </div>
        ) : articles.length === 0 ? (
          <div className="text-gray-500 text-center py-8">
            该主题下暂无文章
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`
                  rounded-lg border p-3 cursor-pointer transition-colors
                  ${selectedArticle === article.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}
                `}
                onClick={() => onArticleSelect(article.id)}
              >
                <h3 className="font-medium text-gray-900 mb-1">
                  {article.title}
                </h3>
                <div className="text-sm text-gray-500">
                  {article.id.split('-').slice(0, 3).join('-')}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};