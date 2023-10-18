const router = require('express').Router();

router.use('/productos', require('./Productos'));

module.exports = router;