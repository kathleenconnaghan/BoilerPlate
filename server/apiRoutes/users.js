const router = require('express').Router();
// To do : db & sequelize

// GET requests to /api/users/
router.get('/', async function (req, res, next) { try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err); 
  }});


// POST requests to /api/users/
router.post('/', async function (req, res, next) {
    try {
        const newUser = await User.create(req.body);
        res.send(newUser)
      } catch (err) {
        next(err);
      }
});


// PUT requests to /api/users/:userId
router.put('/:userId', async function (req, res, next) {
    try {
    const userUpdate = await User.findByPk(req.params.userId);
    const updatedUser = await userUpdate.update(req.body);
    console.log(updatedUser);
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }});


// DELETE requests to /api/users/:userId
router.delete('/:userId', async function (req, res, next) { 
    try {
    const deleteUser = await User.findByPk(req.params.userId);
    await deleteUser.delete();
    res.send(deleteUser);
  } catch (error) {
    next(error);
  }});

module.exports = router;