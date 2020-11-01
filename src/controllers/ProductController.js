const Product = require('../models/Product');

module.exports = {
  async index (request, response) {
    try {
      const products = await Product.findAll();

      if (!products) return response.status(404).send();

      return response.status(200).json({ products });

    } catch (error) {
      return response.status(400).json({ msg: 'Error fetching products. Try again' + error });
    }
  },

  async show (request, response) {
    const id = Number(request.params.id);

    try {
      const product = await Product.findOne({ where: { id: id} });
      if (!product) return response.status(404).send();

      return response.status(200).json({ product: product });

    } catch (error) {
      return response.status(400).json({ msg: 'Error fetching produtcs', error });
    }
  },

  async create (request, response) {
    const { codigo, codigoInterno, nome, preco, volume } = request.body;

    try {
      const product = await Product.findOne({ where: { codigo: codigo } });

      if (product) return response.status(400).json({ msg: 'Product already has registration' });

      await Product.create({
        codigo,
        codigoInterno,
        nome,
        preco,
        volume
      });

      return response.status(201).send();

    } catch (error) {
      return response.status(400).json({ msg: 'Error registering product', error });
    }
  },

  async update (request, response) {
    const id = Number(request.params.id);
    const { codigo, codigoInterno, nome, preco, volume } = request.body;

    try {
      const product = await Product.findOne({ where: { id:id } });

      if (!product) return response.status(404).send();

      await Product.update({
        codigo,
        codigoInterno,
        nome,
        preco, 
        volume
      }, {
        where: { id: id }
      })

      return response.status(201).json({ msg: "Product successfuly edited" });

    } catch (error) {
      return response.status(400).json({ msg: 'Error when editing product'});
    }
  },

  async delete (request, response) {
    const id = Number(request.params.id);

    try {
      const product = await Product.findOne({ where: { id:id } });

      if (!product) return response.status(404).send();

      await Product.destroy({ where: { id: id} });

      return response.status(200).json({ msg: "Product deleted" });
    } catch (error) {
      return response.status(400).json({ msg: `Error when deleting product: ${error}` })
    }
  }
}