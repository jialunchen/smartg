const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/sensor", {
      target: "http://18.216.177.93:8080",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/leaves", {
      target: "http://18.216.177.93:8080",
      changeOrigin: true,
    })
  );
};
