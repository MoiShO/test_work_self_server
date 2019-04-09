const config = {
    host: '10.2.7.132',
    port: '5432',
    user: 'postgres',
    password: '',
    database: 'postgres',
    connectionLimit: 100,
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

const db = pgp(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}?ssl=true`);

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
    
