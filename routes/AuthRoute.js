const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const posts = [
    {
      username: 'tansen',
      title: 'Post 1'
    },
    {
      username: 'bondhon',
      title: 'Post 2'
    }
  ]

  const middlewareAccessToken= (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
  
  router.get('/posts', middlewareAccessToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
  })

router.post('/login',(req,res)=>{
    const username = req.body.username
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken});
})


module.exports = router;