const Sequelize = require('sequelize');
const connection = require('../database/connection');

const User = connection.define('user', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// User.sync({ force:false }).then( ()=>{} );

module.exports = User;