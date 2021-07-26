const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to  /api/users/

//---------- error handling for API route:
router.use(function (req, res, next) {
    const err =  new Error('Not Found.');
    err.status = 404;
    next(err)
})

module.exports = router;