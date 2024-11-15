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
  const [viewMode, setViewMode] = useState<'markdown' | 'original'>('original');

  useEffect(() => {
    if (topicId && articleId) {
      const articles = loadArticles(topicId);
      const found = articles.find(a => a.id === articleId);
      setArticle(found || null);
      // 重置为原文视图
      setViewMode('original');
    } else {
      setArticle(null);
    }
  }, [topicId, articleId]);

  // 自定义图片渲染
  const ImageRenderer = ({ src, alt }: { src: string; alt?: string }) => {
    return (
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full h-auto"
        loading="lazy"
      />
    );
  };

  if (!article) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-gray-500 text-xl">请选择一篇文章查看</p>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-white flex flex-col h-full">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 truncate">
            {article.title}
          </h1>
          {article.originalLink && (
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('markdown')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'markdown' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Markdown
              </button>
              <button
                onClick={() => setViewMode('original')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  viewMode === 'original' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                原文
              </button>
            </div>
          )}
        </div>
      </div>
  
      <div className="flex-1 overflow-hidden">
        {viewMode === 'markdown' ? (
          <div className="h-full overflow-y-auto">
            <article className="max-w-4xl mx-auto px-8 py-12">
              <div className="prose prose-lg prose-slate max-w-none">
                <ReactMarkdown
                  components={{
                  img: ImageRenderer,
                  // 自定义链接渲染，在新窗口打开
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {children}
                    </a>
                  ),
                  // 自定义标题样式
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold mb-2">{children}</h3>
                  ),
                  // 自定义代码块样式
                  code: ({ node, inline, className, children, ...props }) => (
                    <code
                      className={`${className} ${
                        inline 
                          ? 'bg-gray-100 rounded px-1' 
                          : 'block bg-gray-800 text-white p-4 rounded-lg'
                      }`}
                      {...props}
                    >
                      {children}
                    </code>
                  ),
                  // 自定义引用块样式
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-200 pl-4 italic">
                      {children}
                    </blockquote>
                  ),
                }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>
            </article>
          </div>
        ) : (
          <webview
            src={article.originalLink}
            style={{ 
              width: '100%',
              height: '100%'
            }}
            className="flex-1"
            allowpopups="true"
            webpreferences="contextIsolation=false"
          />
        )}
      </div>
    </main>
  );
};