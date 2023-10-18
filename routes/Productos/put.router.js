const router = require('express').Router();
const controller = require('../../src/Productos/infrastructure/controller/put.controller');
module.exports = router.put('/:id', controller);