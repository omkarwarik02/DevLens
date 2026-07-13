
const {signUp,login, githubCallback} = require('../controllers/authController');
const express = require('express');  
const router = express.Router();
const validate = require('../middleware/validate');
const { loginValidationRules } = require('../validators/authValidators');

router.post('/signup', signUp)

router.post('/login', loginValidationRules, validate,login);

router.get('/github/callback',githubCallback)

module.exports = router;