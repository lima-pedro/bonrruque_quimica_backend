const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Product = connection.define('products', {
  codigo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  codigoInterno: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  volume: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

// Product.sync({ force: false }).then( ()=>{} );

module.exports = Product;