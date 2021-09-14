'use strict'

const { showUsers, addUser, removeUser } = require('../controllers/user.controllers')

const router = require('express').Router()

router.get('/', showUsers)
router.get('/del', removeUser)
router.post('/add', addUser)

module.exports = router