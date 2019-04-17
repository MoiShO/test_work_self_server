const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: process.env.DB_LIMIT,
};

const initOptions = {
  error(error, e) {
      if (e.cn) {
          console.log('CN:', e.cn);
          console.log('EVENT:', error.message || error);
      }
  }
};

const pgp = require('pg-promise')(initOptions);

const db = pgp(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);

db.connect()
    .then(obj => {
        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });

db.proc('version')
    .then(data => {
      console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

module.exports = db
    
