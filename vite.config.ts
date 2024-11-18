import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import { fileURLToPath } from 'url'

// 使用动态导入来处理 ESM 模块
const mdx = await import('@mdx-js/rollup')

export default defineConfig({
  plugins: [
    react(),
    mdx.default({
      providerImportSource: "@mdx-js/react"
    }),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },
    ]),
    renderer(),
  ],
  server: {
    proxy: {
      // 处理微信图片
      '/wx-images': {
        target: 'https://mmbiz.qpic.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wx-images/, ''),
        headers: {
          'Referer': 'https://mp.weixin.qq.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
        }
      },
      // 处理微信文章
      '/wx-mp': {
        target: 'https://mp.weixin.qq.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wx-mp/, ''),
        headers: {
          'Referer': 'https://mp.weixin.qq.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.ELECTRON ? './' : '/'
})