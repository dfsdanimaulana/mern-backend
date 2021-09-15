'use strict'

const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

// router

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// routers

app.use('/user', require('./src/routes/user.routes'))

app.use('/', (req, res) => {
    res.status(404)
})


module.exports = app
