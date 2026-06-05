const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    code:{
        type:String,
        required: true
    },
    
    language:{
        type:String,
        required:true
    },
    aiReview:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('Review', reviewSchema)