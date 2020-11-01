const Sequelize = require('sequelize');

const connection = new Sequelize('bonrruque_quimica', 'root', 'so101190', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
})

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully!');
  })
  .catch(error => {
    console.log('Unable to connect to the database', error);
  });

module.exports = connection;