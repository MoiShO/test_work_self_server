const fs = require('fs')
const path = require('path')

module.exports = {

  extractorUrl: (ctx) => {
    const check = ctx.url.split('/')[1]
    return check
  },

  hash: async () => {
    const pathPublic = path.join(__dirname, '..\\public')
    let hash = {}
    const data = await new Promise((resolve, reject) => {
      return fs.readdir(pathPublic, (err, filenames) => resolve(filenames))
    })
    data.map((item) => {
          const hashWith = item.split('-')
          if(hashWith[1] !== undefined ){
            hash[hashWith[0]] = hashWith[1].split('.')[0]
          }
        })
    return hash
  }
}