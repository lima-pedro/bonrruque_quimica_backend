const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Cliente = connection.define('clientes', {
  nome: {
    type: Sequelize.STRING,
    allowNull : false
  },
  contato: {
    type: Sequelize.STRING,
    allowNull: false
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  numeroEndereco: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  uf :{
    type: Sequelize.STRING,
    allowNull: false
  },
  complementoEndereco: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// Cliente.sync({ force: false }).then( ()=> {} );

module.exports = Cliente;