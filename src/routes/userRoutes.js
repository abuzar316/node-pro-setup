const router = require('express').Router();

// import controllers
const userController = require('../controller/usersController');

router.post('/api/v0/register', userController.register);



module.exports = router;