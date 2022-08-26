const express = require('express');
const BookController = require('./controllers/BookController');
const UserController = require('./controllers/UserController');

const route = express.Router();

route.get('/', (req, res) => res.render("index"));

route.post('/authenticate', UserController.authenticate);

route.get('/book/', BookController.index);
route.get('/book/create', BookController.create);
route.post('/book', BookController.store);
route.get('/book/:book', BookController.show);
route.get('/book/:book/edit', BookController.edit);
route.put('/book/:book', BookController.update);
route.delete('/book/:book', BookController.delete);

module.exports = route;