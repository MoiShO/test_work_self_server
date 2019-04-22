const Pug = require('koa-pug');

const s = require('../ssr/index');
const u = require('../utilites/utils');
const db = require('../controller/db_controllers');
const RootStore = require('../src/js/store/rootStore').default

async function initialState(ctx) {
    const store = {}
    store.listStore = {}
    
    store.listStore.list = await db.getNotes();
    store.listStore.CheckHasErrored =
      (await db.getNote({id : u.extractorUrl(ctx) })).message ? true : false

    Number(u.extractorUrl(ctx))
    ? store.listStore.list_check = await db.getNote({id : Number(u.extractorUrl(ctx)) })
    : store.listStore.list_check = []

    return store;
}

module.exports = async (ctx, next) => {
    const store = new RootStore(await initialState(ctx))
  
    ctx.mobx = {}
    ctx.mobx.store = store

    const pug = new Pug({ viewPath: './ssr/' })
    const content = await s.serverPug(ctx)
    const html = pug.render('template',
    {
      title: 'SSR',
      content: content,
      initialState: JSON.stringify(ctx.mobx.store),
    })
    ctx.body = html
    await next()
}