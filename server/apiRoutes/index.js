const router = require('express').Router();

router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

router.use(function (req, res, next) {
    const err =  new Error('Not Found.');
    err.status = 404;
    next(err)
})

module.exports = router;