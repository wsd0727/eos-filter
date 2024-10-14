
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      packages: path.resolve(__dirname, './src/packages'),
    },
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue','element-plus','vxe-table'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: "src/packages/index.js",
      name: "@eosine/filter",
      fileName: "@eosine-filter"
    },
  },
  server: {
    host: true,
    open: true,
    proxy: {
      '/eos-api': {
        target: 'http://120.48.123.183'
      },
      '/group1/M00': {
        target: 'http://120.48.123.183'
      }
    }
  },
})
