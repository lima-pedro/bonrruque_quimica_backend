const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Cliente = require('./Cliente');

const Pedido = connection.define('pedido', {
  observacoes: {
    type: Sequelize.TEXT,
  },
  pontoReferenciaEntrega: {
    type: Sequelize.TEXT
  },
  formaPagamento: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataEntrega: {
    type: Sequelize.STRING
  },
  produtos_pedido: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Cliente.hasMany(Pedido, {
  foreignKey: 'clienteId'
})
Pedido.belongsTo(Cliente);

// Pedido.sync({ force:true }).then( ()=> {} );

module.exports = Pedido;