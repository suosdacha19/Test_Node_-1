const router = require('express').Router();
const controller = require('../../src/Productos/infrastructure/controller/post.controller');
module.exports = router.post('/', controller);