const Cliente = require('../models/Cliente');
const { head } = require('../routes');

module.exports = {
  async index (request, response) {
    try {
      const clients = await Cliente.findAll();
      if (!clients) return response.status(404).json({ msg: 'Clients not found' });
      return response.status(200).json({ clients: clients });
    } catch (error) {
      return response.status(400).json({ msg: `Error fetching clients: ${error}` });
    }
  },

  async show (request, response) {
    const id = Number(request.params.id);

    try {

      const client = await Cliente.findOne({ where: { id:id } });

      if (!client) return response.status(404).send();

      return response.status(200).json({ client: client });

    } catch (error) {
      return response.status(400).json({ msg: `Error fetching client: ${error}` });
    }
  },

  async create (request, response) {
    const {
      nome,
      contato,
      logradouro,
      numeroEndereco,
      bairro,
      cidade,
      uf,
      complementoEndereco
    } = request.body;
    
    try {
      await Cliente.create({
        nome,
        contato,
        logradouro,
        numeroEndereco,
        bairro,
        cidade,
        uf,
        complementoEndereco
      })

      return response.status(201).send();
    } catch (error) {
      return response.status(400).send({ msg: `Error registering client: ${error}` });
    }
  },

  async update (request, response) {
    const id = Number(request.params.id);
    const { 
      nome,
      contato,
      logradouro,
      numeroEndereco,
      bairro,
      cidade,
      uf,
      complementoEndereco
    } = request.body;

    try {

      const client = await Cliente.findByPk(id);

      if (!client) response.status(404).send();

      await Cliente.update({
        nome,
        contato,
        logradouro,
        numeroEndereco,
        bairro,
        cidade,
        uf,
        complementoEndereco
      }, {
        where: { id:id }
      })

      return response.status(201).send();

    } catch (error) {
      return response.status(400).json({ msg: `Error editing client: ${error}` });
    }
  },

  async delete (request, response) {
    const id = Number(request.params.id);

    try {
      const client = await Cliente.findByPk(id);

      if (!client) response.status(404).send();

      await Cliente.destroy({ where: { id:id } });

      return response.status(200).json({ msg: 'Client deleted successfully' });
    } catch (error) {
      return response.status(400).json({ msg: `Error deleting client: ${error}` });
    }
  }
}
