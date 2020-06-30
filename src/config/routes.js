const express = require('express');
const users = require('../controllers/users');
const posts = require('../controllers/posts');
const auth = require('../middlewares/auth');
const routes = express.Router();

routes.get('/users', users.getAll);
routes.put('/users', users.create);
routes.get('/users/check', users.check);
routes.post('/users/login', users.login);
routes.get('/users/me', auth, users.me); // only user with cookie can request this so auth

routes.put('/posts', auth, posts.create);

routes.get('/health', (req, res) => {
    res.send();
});

module.exports = routes;