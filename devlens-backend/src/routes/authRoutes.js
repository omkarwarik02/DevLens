
const {signUp,login, githubCallback} = require('../controllers/authController');

const express = require('express');  
const router = express.Router();

router.post('/signup', signUp)
router.post('/login',login)
router.get('/github/callback',githubCallback)

module.exports = router;