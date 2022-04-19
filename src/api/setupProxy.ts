import { createProxyMiddleware } from "http-proxy-middleware";
export function proxy(app: any) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://54.180.136.0:3000",
      changeOrigin: true
    })
  );
}
