import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import postcssImport from 'postcss-import';
// import tailwindcss from 'tailwindcss';
import {resolve} from 'path'
// const path = require('path');
// https://vitejs.dev/config/

const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    postcss: {
      plugins: [
        postcssImport,
        require('autoprefixer'),
        require('postcss-nested'),
      ],
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@@': pathResolve('src/components'),
      '~': pathResolve('src/stores'),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
