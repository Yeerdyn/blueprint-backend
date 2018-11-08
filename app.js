import koa from "koa";
import views from "koa-views";
import json from "koa-json";
import onerror from "koa-onerror";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger";
import koastatic from "koa-static";
import index from './routes/index';
import users from './routes/users';
import auth from './routes/auth';
require('dotenv').config();

const app = new koa();

onerror(app);

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));

app.use(json());
app.use(logger());
app.use(koastatic(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'pug'
}));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(auth.routes(), users.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
