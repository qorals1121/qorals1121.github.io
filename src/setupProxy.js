const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/notion', {
      target: 'https://notion-api.splitbee.io/v1/page/',
      changeOrigin: true
    })
  )
};