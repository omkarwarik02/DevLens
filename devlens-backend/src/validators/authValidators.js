const { body } = require('express-validator');

exports.loginValidationRules = [
  body('email')
    .trim()
    .isEmail().withMessage('Enter a valid email')
    .normalizeEmail(),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];