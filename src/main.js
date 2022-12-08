import Http from 'http';
import Koa from 'koa';
import KoaBody from 'koa-body';
import { sequelize } from './models/index.js';
import router from './router/index.js';

const app = new Koa();

app
  .use(
    KoaBody({
      multipart: true,
      formidable: {
        maxFileSize: 8 * 1024 * 1024,
      },
    })
  )
  .use(router.routes())
  .use(router.allowedMethods());

const server = Http.createServer(app.callback());
async function run() {
  await sequelize.authenticate();
  await sequelize.sync();
  server.listen(process.env.PORT || 3000);
}

run();

process.on('SIGINT', function () {
  console.info('CLOSING [SIGINT]');
  process.exit();
});

process.on('SIGTERM', function () {
  console.info('CLOSING [SIGTERM]');
  process.exit();
});
