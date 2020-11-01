const jwt = require('jsonwebtoken');
const key = require('./auth.json');

const generateToken = (params) => {
  return jwt.sign(params, key.secret, {
    expiresIn: 600
  })
}

module.exports = generateToken;