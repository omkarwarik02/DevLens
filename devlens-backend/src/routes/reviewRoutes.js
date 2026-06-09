const express = require('express');
const router = express.Router();

const {reviewCode, reviewHistory} = require("../controllers/reviewController");
const protect = require("../middleware/authMiddleware");

router.post("/",protect,reviewCode);
router.get("/history",protect,reviewHistory)


module.exports = router;