const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=> console.log('MongoDB connected')).catch((err)=>console.log('MongoDB error:', err))

module.exports = app