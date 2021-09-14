'use strict'

const {
    showUsers,
    addUser,
    removeUser,
} = require('../controllers/user.controllers')

const router = require('express').Router()

router.get('/:id', removeUser)
router.get('/', showUsers)
router.post('/add', addUser)

module.exports = router
