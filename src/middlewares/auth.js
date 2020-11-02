const jwt = require("jsonwebtoken");
const secretToken = require('../auth.json');

function auth(request, response, next) {
  const token = request.headers.authorization;
  if (!token) response.status(401).json({ error: 'Token is required' });
  jwt.verify(token, secretToken.secret, (erro, decoded) => {
      if (erro) response.status(400).json(erro);
      request.decoded = decoded;
      next();
    })
}

module.exports = auth;

