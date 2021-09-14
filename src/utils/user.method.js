'use strict'

const debug = require('debug')('dev')
const User = require('../models/user.model')

exports.saveUser = async (data) => {
    const user = new User(data)
    const result = await user.save()
    debug(result)
    return result
}

exports.getUsers = (data) => {
    return User.find()
}

exports.deleteUser = (id) => {
    return User.findByIdAndDelete(id)
}