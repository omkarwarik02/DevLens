const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, '.env') })

const mongoose = require('mongoose')
const app = require('./app')


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })