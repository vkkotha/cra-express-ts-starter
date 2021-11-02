import Config from './Config';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

const proxy = function (app: Application): void {
  if (Config.USE_PROXY) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: Config.SERVER_URL,
        changeOrigin: true,
        ws: true,
        logLevel: 'debug',
      })
    );
  }
};

export default proxy;
