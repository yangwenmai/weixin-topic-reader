import { useState, useEffect } from 'react';
import { Topic } from '@/types';

export function useTopics() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        // 这里可以从本地文件系统或API加载话题列表
        const response = await fetch('/api/topics');
        const data = await response.json();
        setTopics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load topics');
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  return { topics, loading, error };
}