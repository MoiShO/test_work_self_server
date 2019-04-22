module.exports = {

  extractorUrl: (ctx) => {
    const check = ctx.url.split('/')[1]
    return check
  },

  dbError: async (func) => {
    const dataDb = await func;
    console.log(dataDb)
    return dataDb.message ? true : false;
  }
}