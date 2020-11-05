const jwt = require('jsonwebtoken');
const key = require('./auth.json');

const generateToken = (params) => {
  return jwt.sign(params, key.secret, {
    expiresIn: 1800
  })
}

module.exports = generateToken;