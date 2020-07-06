const express = require('express');
const users = require('../controllers/users');
const posts = require('../controllers/posts');
const auth = require('../middlewares/auth');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/posts')
	},
	filename: function (req, file, cb) {
		const nameArr = file.originalname.split('.');
		const extension = nameArr[nameArr.length - 1];
		let fileName = Math.random().toString(36).substr(2, 9);
		cb(null, fileName + '.' + extension);
	}
});
const upload = multer({ storage: storage });
const routes = express.Router();

routes.get('/users', users.getAll);
routes.put('/users', users.create);
routes.get('/users/check', users.check);
routes.post('/users/login', users.login);
routes.get('/users/me', auth, users.me); // only a user with a cookie can send req to auth

routes.put('/posts', auth, upload.single('image'), posts.create);

routes.get('/health', (req, res) => {
    res.send();
});

module.exports = routes;