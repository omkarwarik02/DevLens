const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        sparse:true
    },
    password:{
        type:String
    },
    githubId:{
        type:String,
        unique:true,
        sparse:true
    },
    avatar:{
        type:String
    }
},{timestamps:true})


module.exports = mongoose.model('User', userSchema)
