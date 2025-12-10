const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '1jz1al7459604.vicp.fun'
    ]
  }
};