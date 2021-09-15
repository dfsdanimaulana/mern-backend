'use strict'

const {
    showUsers,
    showUser,
    addUser,
    removeUser,
    updateUser
} = require('../controllers/user.controllers')

const router = require('express').Router()

router.delete('/:id', removeUser)
router.get('/:id', showUser)
router.put('/',updateUser)
router.get('/', showUsers)
router.post('/add', addUser)

module.exports = router
