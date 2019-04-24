const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const serve = require('koa-static');
const compress = require('koa-compress');
const views = require('koa-views')
const staticCache = require('koa-static-cache');
var path = require('path');

const err = require('./middleware/error');
const rd = require('./controller/generator');
const db = require('./controller/db_controllers');
const ssr = require('./middleware/ssrRender');

const app = new Koa();
const router = new Router();

app.use(compress());
app.use(cors());
app.use(err);
app.use(logger());

app.use(staticCache(path.join(__dirname, 'public'), {
  maxAge: 60 * 24
}))

app.use(serve('./public'));
app.use(serve('.'));

app.use(views(__dirname + '/documentation'));

router
      .get('*', ssr)

      .get('/doc', async ctx => {
            await ctx.render('output.html')
        })

      // .get('/docs', async ctx => {
      //     await ctx.render('example.html')
      //   })

      .get('/notes', async ctx => {
          let note = await db.getNotes(ctx);
          ctx.body = note;
        })

      .get('/notes/:id', async ctx => {
          let note = await db.getNote(ctx.params);
          ctx.body = note;
        })

      .get('/notes/random/:num', async ctx => {
          ctx.body = rd.getRandomData(ctx.params);
        })

      .post('/notes', koaBody(), db.addNote)

      .delete('/notes/:id', async ctx => {
        ctx.body = await db.delNote(ctx.params);
      })

    .put('/notes/:id', koaBody() , db.updateNote);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT ? process.env.PORT : 3000)
console.log(`Server start on port: ${process.env.PORT ? process.env.PORT : 3000}`);
