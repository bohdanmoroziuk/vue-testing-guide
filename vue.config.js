const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://jsonplaceholder.typicode.com',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
});
