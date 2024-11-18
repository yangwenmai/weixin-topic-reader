interface ReadStatus {
    lastRead: number;  // 最后阅读时间戳
    readCount: number; // 阅读次数
  }
  
  interface TopicStatus {
    lastCheck: number;  // 最后查看话题的时间戳
  }
  
  const STORAGE_KEYS = {
    READ_STATUS: 'markdown-reader:read-status',
    TOPIC_STATUS: 'markdown-reader:topic-status'
  };
  
  // 获取文章的阅读状态
  export const getArticleReadStatus = (articleId: string): ReadStatus | null => {
    const storage = localStorage.getItem(STORAGE_KEYS.READ_STATUS);
    if (!storage) return null;
    
    const readStatus = JSON.parse(storage);
    return readStatus[articleId] || null;
  };
  
  // 更新文章的阅读状态
  export const updateArticleReadStatus = (articleId: string) => {
    const storage = localStorage.getItem(STORAGE_KEYS.READ_STATUS);
    const readStatus = storage ? JSON.parse(storage) : {};
    
    const currentStatus = readStatus[articleId] || { readCount: 0 };
    readStatus[articleId] = {
      lastRead: Date.now(),
      readCount: currentStatus.readCount + 1
    };
    
    localStorage.setItem(STORAGE_KEYS.READ_STATUS, JSON.stringify(readStatus));
  };
  
  // 获取话题的最后查看时间
  export const getTopicLastCheck = (topicId: string): number => {
    const storage = localStorage.getItem(STORAGE_KEYS.TOPIC_STATUS);
    if (!storage) return 0;
    
    const topicStatus = JSON.parse(storage);
    return topicStatus[topicId] || 0;
  };
  
  // 更新话题的最后查看时间
  export const updateTopicLastCheck = (topicId: string) => {
    const storage = localStorage.getItem(STORAGE_KEYS.TOPIC_STATUS);
    const topicStatus = storage ? JSON.parse(storage) : {};
    
    topicStatus[topicId] = Date.now();
    localStorage.setItem(STORAGE_KEYS.TOPIC_STATUS, JSON.stringify(topicStatus));
  };
  
  // 检查话题是否有新文章
  export const hasNewArticles = (topicId: string, articles: ArticleData[]): boolean => {
    const lastCheck = getTopicLastCheck(topicId);
    
    // 如果从未检查过该话题，则认为所有文章都是新的
    if (lastCheck === 0) return true;
    
    // 确保 article.date 是有效的日期字符串
    return articles.some(article => {
      if (!article.date) return false;
      const timestamp = new Date(article.date).getTime();
      return !isNaN(timestamp) && timestamp > lastCheck;
    });
  };