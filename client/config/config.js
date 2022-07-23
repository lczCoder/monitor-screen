import { defineConfig } from 'umi';
import routes from './routes'
import theme from '../src/theme'

const path = require('path');

export default defineConfig({
  //  取消node_module babel编译
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  hash: true,
  // mfsu:{}, // 热更新优化
  // webpack5:{},
  dynamicImport: false, // 按需加载，上线前需分包
  targets: {
    ie: 10,
  },
  define: {
    env: process.env.UMI_ENV,
  },
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@@@': path.resolve(__dirname, '../src/components'),
    '@serve':path.resolve(__dirname,'../src/server'),
    '@assets': path.resolve(__dirname, '../src/assets/images'),
    '@less': path.resolve(__dirname, '../src/theme/mixins.less'),
  },
  devtool: process.env.NODE_ENV !== 'production' && 'cheap-module-source-map',
  routes,
  theme,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  inlineLimit: 10000, // 图片打包size限制
  // babel插件配置
  extraBabelPlugins: [
    // [
    //   'react-css-modules',
    //   {
    //     exclude: 'node_modules',
    //     generateScopedName: '[name]__[local]___[hash:base64:5]',
    //     filetypes: {
    //       '.less': {
    //         syntax: 'postcss-less',
    //       },
    //     },
    //   },
    // ],
  ],
  // 解析对应的react-css-modules转义后的class
  // cssLoader: {
  //   modules: {
  //     localIdentName: '[name]__[local]___[hash:base64:5]'
  //   },
  // },
});
