const express = require('express');
const router = express.Router();

const {reviewCode} = require("../controllers/reviewController");
const protect = require("../middleware/authMiddleware");

router.post("/",protect,reviewCode);


module.exports = router;