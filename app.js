const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const serve = require('koa-static');
const compress = require('koa-compress')
const Pug = require('koa-pug')

const err = require('./middleware/error');
const rd = require('./controller/generator');
const db = require('./controller/db_controllers');

const stores = require('./app/js/store/index');
const s = require('./app/index')

const app = new Koa();
const router = new Router();

app.use(compress());
app.use(cors());
app.use(err);
app.use(logger());

app.use(serve('./public'));
app.use(serve('.'));

// router.get('/', async (ctx, next) =>{
//   ctx.body = await s.server(ctx, stores)
// });

router.get('/', async (ctx, next) =>{
  const pug = new Pug({ viewPath: './ssr/' })
  const content =  s.serverPug(ctx)
  const html = pug.render('template',
  {
    title: 'SSR',
    content: content,
    initialState: JSON.stringify(stores),
  })
  ctx.body = html
});

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

app.listen(process.env.PORT? process.env.PORT : 3001);