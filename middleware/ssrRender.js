const Pug = require('koa-pug')
const s = require('../app/index')
const stores = require('../app/js/store/index');
const utilite = require('../utilites/extractorUrl')

module.exports = async (ctx, next) => {
  // if ((Number(utilite(ctx))) || (ctx.url === '/')) {
    const pug = new Pug({ viewPath: './ssr/' })
    const content =  s.serverPug(ctx)
    const html = pug.render('template',
    {
      title: 'SSR',
      content: content,
      initialState: JSON.stringify(stores),
    })
    ctx.body = html
  // } else { 
    await next()
  // }
}