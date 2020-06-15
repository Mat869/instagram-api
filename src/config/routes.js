const express = require('express');
const users = require('../controllers/users');
const routes = express.Router();


routes.get('/users', users.getAll);

routes.get('/', (req, res) => {
    res.send();
});





module.exports = routes;