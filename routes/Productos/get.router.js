const router = require('express').Router();
const controller = require('../../src/Productos/infrastructure/controller/get.controller');
module.exports = router.get('/', controller);