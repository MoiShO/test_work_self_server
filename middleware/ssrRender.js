const Pug = require('koa-pug')
const s = require('../ssr/index')
const stores = require('../src/js/store/index');
const utilite = require('../utilites/extractorUrl')
const ssr = require('../src/js/store/storeSSR')
const db = require('../controller/db_controllers');
const mobx = require('mobx');

module.exports = async (ctx, next) => {
  if ((Number(utilite(ctx))) || (ctx.url === '/')) {

    const store = ssr.default(stores.default)

    store.listStore.list = mobx.toJS(await db.getNotes())


    Number(utilite(ctx))
    ? store.listStore.list_check = mobx.toJS(await db.getNote({id : Number(utilite(ctx)) }))
    : store.listStore.list_check = []

    const pug = new Pug({ viewPath: './ssr/' })
    const content = await s.serverPug(ctx)
    const html = pug.render('template',
    {
      title: 'SSR',
      content: content,
      initialState: JSON.stringify(store),
    })
    ctx.body = html
  } else {
    await next()
  }
}