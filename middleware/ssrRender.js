const Pug = require('koa-pug');
const mobx = require('mobx');

const s = require('../ssr/index');
const stores = require('../src/js/store/index').default;
const utilite = require('../utilites/extractorUrl');
const ssr = require('../src/js/store/storeSSR').default;
const db = require('../controller/db_controllers');
const RootStore = require('../src/js/store/rootStore').default

async function initialState(ctx) {
    const store = ssr(stores);
    
    store.listStore.list = mobx.toJS(await db.getNotes());

    Number(utilite(ctx))
    ? store.listStore.list_check = mobx.toJS(await db.getNote({id : Number(utilite(ctx)) }))
    : store.listStore.list_check = []

    return store;
}

module.exports = async (ctx, next) => {
  if ((Number(utilite(ctx))) || (ctx.url === '/')) {

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
  } else {
    await next()
  }
}