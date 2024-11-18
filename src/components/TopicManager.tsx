import { useState } from 'react';
import { ipcRenderer } from 'electron';

interface TopicManagerProps {
  onClose: () => void;
}

export const TopicManager: React.FC<TopicManagerProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdateTopics = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await ipcRenderer.invoke('run-python', 'main.py');
        console.log('Python result:', result);
      } catch (error) {
        console.error('Error running Python:', error);
        throw error;
      }
      
      // 刷新页面以加载新内容
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : '更新失败');
    } finally {
      setIsLoading(false);
    }
  };

    const runPython = async () => {
        try {
            const result = await ipcRenderer.invoke('run-python', 'main.py');
            console.log('Python result:', result);
            return result;
        } catch (error) {
            console.error('Error running Python:', error);
            throw error;
        }
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">话题管理</h2>
        
        <div className="space-y-4">
          <button
            onClick={handleUpdateTopics}
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-lg ${
              isLoading
                ? 'bg-gray-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isLoading ? '更新中...' : '更新话题内容'}
          </button>
          
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          关闭
        </button>
      </div>
    </div>
  );
};