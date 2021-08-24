const express = require('express')
const router = express.Router()
const Post = require('../models/post')

router.get('/post', async (req, res) => {
  const post = await Post.find()
  res.send(post)
  console.log(post)
})
router.post('/post', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  })
  post.save().then((data) => {
    res.json(data)
  })
})
module.exports = router
