const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/news", {
      target: "https://api.aylien.com",
      headers: {
        'Content-Type': 'application/json',
        'X-AYLIEN-NewsAPI-Application-ID': 'e7777534',
        'X-AYLIEN-NewsAPI-Application-Key': '55bf815687fb01a9190fd09885a7a9b4',
      },
      secure: false,
      changeOrigin: true
    })
  );
};