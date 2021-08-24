const express = require('express')
const router = express.Router()
const customer = require('../models/customer')
//get all customer from databasae
router.get('/customer', async (req, res) => {
  const cus = await customer.find({}, { name: 1, _id: 1 })
  res.send(cus)
})
//submit customer data
router.post('/customer', (req, res) => {
  const cus = new customer({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    password: req.body.password,
    role: req.body.role,
  })
  cus.save().then((data) => {
    res.send('post succesful')
    console.log('post succesful')
  })
})
//specific customer
// router.get('/customer/:cid',(req, res) => {
//   customer
//     .findById(req.params.cid)
//     .then((doc) => {
//       res.send(doc)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })
////////get specific customer
router.get('/customer/:cid', async (req, res) => {
  const cus = await customer.findById(req.params.cid)
  res.json(cus)
})

//delete customer

router.delete('/customer/:cid', async (req, res) => {
  const cus = await customer.deleteOne({ _id: req.params.cid })
  res.send(cus)
})

//router.delete('')
module.exports = router
