// 代理
// 后期接入后端api 配置
const testUrl = 'http://test.com';
const prodUrl = 'https://production.com';

const proxyConfig = {
  dev: {
    '/dev': {
      target: testUrl,
      changeOrigin: true,
      pathRewrite: {
        '^/dev': '',
      },
    },

    '/production': {
      target: prodUrl,
      changeOrigin: true,
      pathRewrite: {
        '^/dev': '',
      },
    },
  },
};
