const express = require("express");
require('dotenv').config()
const app = express();
const router = express.Router()

const jwt = require('jsonwebtoken')
app.use(express.json())

const PublicRoute = require('./routes/PublicRoute')
const AuthRoute = require('./routes/AuthRoute')
app.use('/public', PublicRoute);
app.use('/auth', AuthRoute);
// app.post('/login',(req,res)=>{
//     const username = req.body.username
//     const user = { name: username }
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//     res.json({accessToken:accessToken});
// })


app.listen(5000,()=> console.log('server running'))
