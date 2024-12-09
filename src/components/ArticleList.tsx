import { useEffect, useState } from 'react';
import { ArticleData, loadArticles } from '../utils/markdownLoader';
import { getArticleReadStatus } from '../utils/storage';

interface ArticleListProps {
  topicId: string | null;
  onArticleSelect: (articleId: string) => void;
  selectedArticle: string | null;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  topicId,
  selectedArticle,
  onArticleSelect,
  className
}) => {
  const articles = topicId ? loadArticles(topicId) : [];

  const getProxiedImageUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('mmbiz.qpic.cn')) {
      return url.replace('https://mmbiz.qpic.cn', '/wx-images');
    }
    if (url.includes('mmbiz.qlogo.cn')) {
      return url.replace('https://mmbiz.qlogo.cn', '/wx-qim');
    }
    if (url.includes('mp.weixin.qq.com')) {
      return url.replace('https://mp.weixin.qq.com', '/wx-mp');
    }
    return url;
  };

  return (
    <aside className={className}>
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">文章列表</h2>
      </div>
      <div className="p-4">
        {articles.map(article => {
          const readStatus = getArticleReadStatus(article.id);
          
          return (
            <button
              key={article.id}
              onClick={() => onArticleSelect(article.id)}
              className={`w-full text-left p-4 rounded-lg mb-2 ${
                selectedArticle === article.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex gap-3 items-start">
                {article.cover && (
                  <div className="flex-shrink-0">
                    <img 
                      src={getProxiedImageUrl(article.cover)} 
                      alt=""
                      className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                      onError={(e) => {
                        console.error('Image load failed:', article.cover);
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="flex-grow min-w-0">
                  <div className="font-medium mb-1 truncate" title={article.title}>{article.title}</div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    {readStatus && (
                      <span>已读 {readStatus.readCount} 次</span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};