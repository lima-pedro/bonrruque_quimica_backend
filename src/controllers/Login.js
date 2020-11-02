const bcrypt = require('bcryptjs');
const generateToken = require('../generateToken');
const User = require('../models/User');

module.exports = {
  async create (request, response) {
    const { email, senha } = request.body;

    try {
      const user = await User.findOne({ where: { email: email } })
      if (!user) return response.status(404).send();
      const senhaHash = await bcrypt.compare(senha, user.senha);
      if (!senhaHash) return response.status(400).json({ msg: 'Invalid Password' });
      return response.status(201).json({
        user: user,
        token: generateToken({ id: user.id })
      });
    } catch (error) {
      return response.status(400).send({ error: error });
    }
  }
}