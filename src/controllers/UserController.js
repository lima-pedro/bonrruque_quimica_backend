const bcrypt = require('bcryptjs');;
const User = require('../models/User');

module.exports = {
  async index (request, response) {
    try {
      const users = await User.findAll();

      if (!users) response.status(404).send();

      return response.status(200).json({ users: users });

    } catch (error) {
      return response.status(400).json({ msg: `Error registering user: ${error}`});
    }
  },

  async show (request, response) {
    const id = Number(request.params.id);

    try {
      const user = await User.findByPk(id);

      if (!user) response.status(404).send();

      return response.status(200).json({ user: user });
    } catch (error) {
      return response.status(400).json({ msg: `Error fetching user: ${error}` });
    }
  },

  async create (request, response) {
    const { nome, email, senha } = request.body;

    try {

      const email_search = await User.findOne({ where: { email: email } });

      if (email_search) response.status(400).json({ msg: 'User already has registration' });

      const senhaHash = await bcrypt.hash(senha, 10);

      await User.create({
        nome,
        email,
        senha: senhaHash
      });

      return response.status(201).send();

    } catch (error) {
      return response.status(400).json({ msg: `Error registering user: ${error}` });
    }
  },

  async update (request, response) {
    const id = Number(request.params.id);
    const { nome, email, senha } = request.body;

    try {

      const user = await User.findByPk(id);

      if (!user) response.status(404).send();

      await User.update({ nome, email, senha }, { where: { id:id } });

      return response.status(201).send();

    } catch (error) {
      return response.status(400).json({ msg: `Error updating user: ${error}` });
    }
  },

  async delete (request, response) {
    const id = Number(request.params.id);

    try {
      const user = await User.findByPk(id);

      if (!user) response.status(404).send();

      await User.destroy({ where: { id:id } });

      return response.status(200).json({ msg: 'User deleted' });
    } catch (error) {
      return response.status(400).json({ msg: `Error deleting user: ${error}` });
    }
  }
}