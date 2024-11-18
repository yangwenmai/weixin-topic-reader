export interface TopicData {
  id: string;
  title: string;
  source: string; // 公众号名称
}

export interface ArticleData {
  id: string;
  title: string;
  content: string;
  originalLink?: string;
  date?: string;
  cover?: string;
}

// 使用 Vite 的 import.meta.glob 来加载文件
const markdownFiles = import.meta.glob('/topics/**/*.{md,mdx}', { as: 'raw', import: 'default', eager: true });

export const loadTopics = (): TopicData[] => {
  const topics = new Map<string, { title: string; source: string }>();
  
  Object.keys(markdownFiles).forEach(path => {
    const match = path.match(/\/topics\/([^/]+)/);
    if (match) {
      const topicId = match[1];
      // 从 topicId 中提取 source（最后一个连字符后的内容）
      const lastDashIndex = topicId.lastIndexOf('-');
      const title = topicId.substring(0, lastDashIndex);
      const source = topicId.substring(lastDashIndex + 1);
      
      topics.set(topicId, {
        title: title.replace(/-/g, ' '),
        source
      });
    }
  });

  return Array.from(topics.entries()).map(([id, { title, source }]) => ({
    id,
    title,
    source
  }));
};

export const loadArticles = (topicId: string): ArticleData[] => {
  const articles: ArticleData[] = [];
  
  try {
    Object.entries(markdownFiles).forEach(([path, content]) => {
      if (path.includes(`/topics/${topicId}/`)) {
        const match = path.match(/\/([^/]+)\.md$/);
        if (match) {
          const fileName = match[1];
          const [year, month, day] = fileName.split('-');
          const date = `${year}-${month}-${day}`;
          
          // 提取标题（去掉日期前缀）
          const title = fileName
            .replace(/^\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-/, '')
            .replace(/-/g, ' ');
          
          // 提取原始链接
          const linkMatch = (content as string).match(/原文链接: (http[s]?:\/\/[^\s]+)/);
          const originalLink = linkMatch ? linkMatch[1] : undefined;

          // 提取封面图链接
          const coverMatch = (content as string).match(/封面图链接: (http[s]?:\/\/[^\s]+)/);
          const coverLink = coverMatch ? coverMatch[1] : undefined;

          articles.push({
            id: fileName,
            title,
            content: content as string,
            originalLink,
            date,
            cover: coverLink
          });
        }
      }
    });
  } catch (error) {
    console.error('Error loading articles:', error);
  }

  // 按日期排序，最新的在前面
  return articles.sort((a, b) => 
    (b.date || '').localeCompare(a.date || '')
  );
};