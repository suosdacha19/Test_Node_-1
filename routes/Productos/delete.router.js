const router = require('express').Router();
const controller = require('../../src/Productos/infrastructure/controller/delete.controller');
module.exports = router.delete('/:id', controller);