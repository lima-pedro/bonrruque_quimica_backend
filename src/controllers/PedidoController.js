const Pedido = require('../models/Pedido');

module.exports =  {
  async index (request, response) {
    try {
      const orders = await Pedido.findAll();
      
      if (!orders) response.status(404).send();

      return response.status(200).json(orders);
      
    } catch (error) {
      return response.status(400).json({ msg: `Error fetching orders: ${error}` });
    }
  },

  async show (request, response) {
    const id = Number(request.params.id);

    try {
      const order = await Pedido.findByPk(id);
      if (!order) response.status(404).send();
      return response.status(200).json({ order: order });
    } catch (error) {
      return response.status(400).json({ msg: 'Error fetching order' + error });
    }
  },

  async create (request, response) {
    const {
      observacoes,
      pontoReferenciaEntrega,
      formaPagamento,
      dataEntrega,
      clienteId,
      produtos_pedido,
    } = request.body;

    try {

      await Pedido.create({
        observacoes,
        pontoReferenciaEntrega,
        formaPagamento,
        dataEntrega,
        clienteId,
        produtos_pedido
      })

      return response.status(201).send();
  
    } catch (error) {
      return response.status(400).json({ msg: `Error registering order: ${error}` });
    }
  },

  async update (request, response) {
    const id = Number(request.params.id);
    const {
      observacoes,
      pontoReferenciaEntrega,
      formaPagamento,
      dataEntrega,
    } = request.body;

    try {
      const order = Pedido.findByPk(id);

      if (!order) response.status(404).send();

      await Pedido.update({
        observacoes,
        pontoReferenciaEntrega,
        formaPagamento,
        dataEntrega,
      }, {
        where: { id:id }
      })

      return response.status(201).send();

    } catch (error) {
      return response.status(400).json({ msg: `Error updating order: ${error}` });
    }
  },

  async delete (request, response) {
    const id = Number(request.params.id);

    try {
      const order = await Pedido.findByPk(id);

      if (!order) response.status(404).send();

      await Pedido.destroy({ where: { id:id } });

      return response.status(200).json({ msg: 'Order deleted' });

    } catch (error) {
      return response.status(400).json({ msg: `Error deleting order: ${error}` });
    }
  }
}
