const express = require('express')

const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const reviewRoutes = require("./routes/reviewRoutes")
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes);
app.use('/api/review',reviewRoutes)

module.exports = app
