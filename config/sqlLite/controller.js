const Notes = require('./sqlLite');
const moment = require('moment');

module.exports = {
  getNotes: async () => Notes.findAll({
    attributes: ['id', 'title'],
    raw : true
  }),

  getNote: async (data) => {
    const { id } = data;

    const query = 
    Notes.findAll({
      attributes: ['id', 'title'],
      raw : true,
      where: {
        id: id
      },
    });

    const db = await query

    if (db.length > 0) {
      return db[0]
    } else {
      return {message: 'error'}
    }
  },

  addNote: async (ctx) => {
    try {
      const { title } = JSON.parse(ctx.request.body)

      Notes.create({ title: title, datetime: moment.utc().format("YYYY-MM-DD HH:mm:ss") })

      const query = 
      Notes.findAll({
        attributes: ['id', 'title'],
        where: {
          title: title
        },
        raw : true
      });

      ctx.body = await query
    } catch(e) {
      return  ctx.body = e
    }
  },

  delNote: (idData) => {
    const { id } = idData

    const data = Notes.destroy({
      where: {
        id: id
      }
    })

    return data
  },

  updateNote: (ctx) => {
    const { id } = ctx.params
    const { title } = JSON.parse(ctx.request.body)
    const date =  moment.utc().format("YYYY-MM-DD HH:mm:ss");

    Notes.update({ title: title, updatedAt: date }, {
      where: {
        id: id
      }
    })

    ctx.body = { id: id, title: title }
  }
}