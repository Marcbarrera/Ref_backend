
const express = require('express');
const router = express.Router();

// importar controller
const { signup, accountActivation, signin } = require('../controllers/auth');

// importar Validator
const { userSignupValidator, userSigninValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);


module.exports = router;