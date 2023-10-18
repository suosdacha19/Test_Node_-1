const router = require('express').Router();
const controller = require('../../src/Productos/infrastructure/controller/find.controller');
module.exports = router.get('/:id', controller);