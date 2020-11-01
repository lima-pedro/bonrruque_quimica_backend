const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const ClienteController = require('./controllers/ClienteController');
const PedidoController = require('./controllers/PedidoController');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/Login');

const auth = require('./middlewares/auth');

routes.get('/products', auth, ProductController.index);
routes.get('/product/:id', auth, ProductController.show);
routes.post('/product', auth, ProductController.create);
routes.put('/product/:id', auth, ProductController.update);
routes.delete('/product/:id', auth, ProductController.delete);

routes.get('/clients', auth,ClienteController.index);
routes.get('/client/:id', auth, ClienteController.show);
routes.post('/client', auth, ClienteController.create);
routes.put('/client/:id', auth, ClienteController.update);
routes.delete('/client/:id', auth, ClienteController.delete);

routes.get('/orders', auth, PedidoController.index);
routes.get('/order/:id', auth, PedidoController.show);
routes.post('/order', auth, PedidoController.create);
routes.put('/order/:id', auth, PedidoController.update);
routes.delete('/order/:id', auth, PedidoController.delete);

routes.get('/users', auth,UserController.index);
routes.get('/user/:id', auth,UserController.show);
routes.post('/user', auth,UserController.create);
routes.put('/user/:id', auth,UserController.update);
routes.delete('/user/:id', auth,UserController.delete);

routes.post('/login', LoginController.create);

module.exports = routes;