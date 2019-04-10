const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const serve = require('koa-static');

const err = require('./middleware/error');
const rd = require('./controller/generator');
const db = require('./controller/db_controllers');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(err);
app.use(logger());

app.use(serve('./publick'));
// router.get('/', (ctx) => {
//   const message = (__dirname + '/publick/text');
//   ctx.body = koaStatic()(message);
// });

router.get('/notes', async (ctx, next) => {
  let note = await db.getNotes();
  ctx.body = note;
});

router.get('/notes/:id', async (ctx, next) => {
  let note = await db.getNotes();
  ctx.body = note;
});

router.get('/notes/random/:num', async (ctx, next) => {
  ctx.body = rd.getRandomData(ctx.params);
});

router.post('/notes', koaBody(), db.addNote);

router.delete('/notes/:id', async (ctx, next) => {
  ctx.body = await db.delNote(ctx.params);
});

router.put('/notes/:id', koaBody() , db.updateNote)

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);