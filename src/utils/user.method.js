'use strict'

const debug = require('debug')('dev')
const User = require('../models/user.model')

exports.saveUser = async (data) => {
    const user = new User(data)
    const result = await user.save()
    debug(result)
    return result
}

exports.getUsers = () => {
    return User.find()
}
exports.getUser = (id) => {
    return User.findById(id)
}

exports.deleteUser = (id) => {
    return User.findByIdAndDelete(id)
}

exports.updateDataUser = (data) => {
    return User.findByIdAndUpdate(data._id, {
        username: data.username,
        email: data.email,
        password: data.password,
    })
}
