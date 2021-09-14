'use strict'

const { showUsers, addUser } = require('../controllers/user.controllers')

const router = require('express').Router()

router.get('/', showUsers)
router.post('/add', addUser)

module.exports = router