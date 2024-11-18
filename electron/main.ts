import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'url'
import { PythonShell } from 'python-shell';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 处理 Windows 平台的 squirrel 事件
if (process.platform === 'win32') {
  app.setAppUserModelId(app.getName())
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      webSecurity: false
    },
  })

  // 开发环境下加载本地服务
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    win.webContents.openDevTools()
  } else {
    // 生产环境下加载打包后的文件
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  // 允许加载远程内容
  session.defaultSession.webRequest.onBeforeSendHeaders(
    { urls: ['https://mmbiz.qpic.cn/*', 'https://mp.weixin.qq.com/*'] },
    (details, callback) => {
      details.requestHeaders['Referer'] = 'https://mp.weixin.qq.com';
      details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36';
      callback({ requestHeaders: details.requestHeaders });
    }
  );

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 添加 IPC 处理器
ipcMain.handle('run-python', async (event, scriptName) => {
  console.log('Running Python script:', scriptName);
  try {
    const scriptPath = path.resolve(process.cwd(), scriptName);
    console.log('Full script path:', scriptPath);
    
    const options = {
      mode: 'text',
      pythonPath: 'python3.10',  // 或者 'python' 取决于你的系统
      pythonOptions: ['-u']  // 使用无缓冲的 stdout 和 stderr
    };

    return await new Promise((resolve, reject) => {
      let pythonOutput = [];
      const pyshell = new PythonShell(scriptPath, options);
      
      pyshell.on('message', function (message) {
        console.log('Python output:', message);
        pythonOutput.push(message);
      });

      pyshell.end(function (err) {
        if (err) {
          console.error('Python execution error:', err);
          reject(err);
        }
        console.log('Python execution completed, output:', pythonOutput);
        resolve(pythonOutput);
      });
    });
  } catch (error) {
    console.error('Python execution error:', error);
    throw error;
  }
});