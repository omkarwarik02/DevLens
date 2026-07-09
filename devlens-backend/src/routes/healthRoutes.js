const express = require('express');
const router = express.Router()




app.get('/health',(req,res)=>{
    res.status(200).json({status:'ok',time:new Date().toISOString()});
});

module.exports = router