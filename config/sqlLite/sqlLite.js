const Sequelize = require('sequelize');
const path = require('path')
const moment = require('moment');

const sequelize = new Sequelize({
  database: 'database_test',
  host: 'localhost',
  port: 5432,
  dialect: 'sqlite',
  storage: path.join(__dirname, 'data_base.sqlite')
  // logging: console.log,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  
// class Notes extends sequelize.Model {}
const Notes = sequelize.define('notes', {
    // attributes
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  datetime: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, {

});


// Notes.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return Notes.create({
//     title: 'База инициализируется с этим значением по умолчанию',
//     datetime: moment.utc().format("YYYY-MM-DD HH:mm:ss")
//   });
// });

module.exports = Notes;