import koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import send from 'koa-send';
import websockify from 'koa-websocket';

import path from 'path';
import KoaWebsocket from 'koa-websocket';

class App {
  app: KoaWebsocket.App;
  router: Router;

  constructor() {
    this.app = websockify(new koa());
    this.router = new Router();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    const { app, router } = this;
    const client = path.resolve(__dirname, '../client/');
    app.use(serve(client));
    app.use(router.routes()).use(router.allowedMethods());
  }

  private routes() {
    const { router } = this;

    router.get('/', async ctx => {
      const html = path.resolve(__dirname, '../client/index.html');
      await send(ctx, ctx.path, { root: html });
    });
  }

  public listen(PORT: number) {
    this.app.listen(PORT, () => {
      console.log(`Server is Running, PORT number is ${PORT}`);
    });
  }
}

export default App;
