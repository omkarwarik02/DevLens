
const {signUp,login, githubCallback} = require('../controllers/authController');
const { body } = require('express-validator');
const express = require('express');  
const router = express.Router();
const validate = require('../middleware/validate');

router.post('/signup', signUp)

router.post('/login',
    [
        body('email').trim().isEmail().withMessage('Enter a valid email').normalizeEmail(),
        body('password').notEmpty().withMessage('Password is required').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    ],
    validate,
    login)













router.get('/github/callback',githubCallback)

module.exports = router;