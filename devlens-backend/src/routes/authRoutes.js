
const {signUp,login, githubCallback} = require('../controllers/authController');
const express = require('express');  
const router = express.Router();
const validate = require('../middleware/Validate');
const { loginValidationRules, signupValidationRules } = require('../validators/authValidators');

router.post('/signup', signupValidationRules, validate, signUp)

router.post('/login', loginValidationRules, validate,login);

router.get('/github/callback',githubCallback)

module.exports = router;