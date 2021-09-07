const express = require('express');
const router = express.Router();

const { loginUser, registerUser } = require('../controllers/userController');

const { registerValidation } = require('../helpers/validation');

router.post('/login', loginUser);
router.post('/register', registerValidation, registerUser);

module.exports = router;
