const router = require('express').Router();

router.use('/', [
    require('./post.router'),
    require('./put.router'),
    require('./get.router'),
    require('./find.router'),
    require('./delete.router'),
])

module.exports = router;