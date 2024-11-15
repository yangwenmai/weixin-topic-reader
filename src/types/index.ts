export interface Article {
  id: string;
  title: string;
  author: string;
  publishDate: string;
  readCount: number;
  isRead: boolean;
  isNew: boolean;
  path: string;
  content?: string;
}

export interface Topic {
  id: string;
  name: string;
  articles: Article[];
}