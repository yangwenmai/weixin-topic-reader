export interface TopicData {
  id: string;
  title: string;
}

export interface ArticleData {
  id: string;
  title: string;
  content: string;
  originalLink?: string;
  date?: string;
}

// 使用 Vite 的 import.meta.glob 来加载文件
const markdownFiles = import.meta.glob('/topics/**/*.{md,mdx}', { as: 'raw', eager: true });

export const loadTopics = (): TopicData[] => {
  const topics = new Set<string>();
  
  Object.keys(markdownFiles).forEach(path => {
    const match = path.match(/\/topics\/([^/]+)/);
    if (match) {
      topics.add(match[1]);
    }
  });

  return Array.from(topics).map(topic => ({
    id: topic,
    title: topic
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
          
          // // 提取原始链接
          const linkMatch = (content as string).match(/原文链接: (http[s]?:\/\/[^\s]+)/);
          const originalLink = linkMatch ? linkMatch[1] : undefined;

          articles.push({
            id: fileName,
            title,
            content: content as string,
            originalLink,
            date
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