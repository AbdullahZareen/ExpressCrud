const express = require('express')
const app = express()
const mongoose = require('mongoose')
//////paring into jason
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//////middle ware
const postRoutes = require('./routes/post')
app.use('/', postRoutes)
const customer = require('./routes/customer')
app.use('/', customer)
////connnection to mongodb
mongoose.connect(
  'mongodb://localhost:27017/onlinefooddelivery?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connnection successful')
  }
)
app.listen(3000)
