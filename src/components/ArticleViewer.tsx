import { useEffect, useState } from 'react';
import { ArticleData, loadArticles } from '../utils/markdownLoader';
import ReactMarkdown from 'react-markdown';

interface ArticleViewerProps {
  topicId: string | null;
  articleId: string | null;
}

export const ArticleViewer: React.FC<ArticleViewerProps> = ({ 
  topicId, 
  articleId 
}) => {
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    if (topicId && articleId) {
      const articles = loadArticles(topicId);
      const found = articles.find(a => a.id === articleId);
      setArticle(found || null);
    } else {
      setArticle(null);
    }
  }, [topicId, articleId]);

  // 自定义图片渲染
  const ImageRenderer = ({ src, alt }: { src: string; alt?: string }) => {
    if (src.includes('mmbiz.qpic.cn')) {
      return (
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full h-auto"
          referrerPolicy="no-referrer"
        />
      );
    }
    return <img src={src} alt={alt} className="max-w-full h-auto" />;
  };

  if (!article) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500 text-xl">请选择一篇文章查看</p>
      </div>
    );
  }

  console.log("originalLink: ", article.originalLink)
  return (
    <main className="flex-1 bg-white h-full overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 truncate">
            {article.title}
          </h1>
          {article.originalLink && (
            <a
              href={article.originalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              查看原文
            </a>
          )}
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-8 py-12">
        <div className="prose prose-lg prose-slate max-w-none">
          <ReactMarkdown
            components={{
              img: ImageRenderer
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
};