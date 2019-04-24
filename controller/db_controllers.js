const db = require('../config/db');
const moment = require('moment');

const postgres =  {

  getNotes: () => {
    return db.any('SELECT id, title AS title FROM notes ORDER BY ID')
  },

  getNote: async (data) => {
    try {
      const { id } = data;
      const query =  db.one('SELECT id, title AS title FROM notes WHERE id = ${id}', {
        id: id,
      })
      return await query
    } catch(e) {
      return {message: e.message}
    }
  },

  addNote: async (ctx) => {
    try {
      const { title } = JSON.parse(ctx.request.body)
      await db.none('INSERT INTO notes (title) VALUES(${title})', {
        title:title,
      })
      let data = db.any('SELECT id, title AS title FROM notes WHERE title = ${title}', {
        title:title,
      })

      ctx.body = await data

    } catch(e) {
      return ctx.body = e
    }
  },

  delNote: (idData) => {
    try {
      const { id } = idData
      return db.none('DELETE FROM notes WHERE id = ${id}', {
        id: id,
      })
    } catch (e) {
      return ctx.body = e
    }
  },

  updateNote: (ctx) => {
    const { id } = ctx.params
    const { title } = JSON.parse(ctx.request.body)
    const date =  moment.utc().format("YYYY-MM-DD HH:mm:ss");
    db.none('UPDATE notes SET title = ${title}, datetime = ${date}  WHERE id = ${id}', {
      title: title,
      id: id,
      date: date,
    })

    ctx.body = { id: id, title: title }
  }
}

module.exports = postgres