const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const { connect } = require('http2')
const connectDb = require('./config/dbConnection')
const app = express()
const dotenv = require('dotenv').config()

connectDb()


PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", require('./routes/contactRoutes'))
app.use("/api/users", require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`servre is running on ${PORT}`)
})