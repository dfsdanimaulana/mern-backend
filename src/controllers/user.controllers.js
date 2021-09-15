'use strict'

const debug = require('debug')('dev')
const {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
    updateDataUser
} = require('../utils/user.method')

exports.showUsers = async (req, res) => {
    try {
        const data = await getUsers()
        res.json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.showUser = async (req, res) => {
    try {
        const id = req.params.id
        const data = await getUser(id)
        res.json(data)
    } catch (error) {
        res.status(404).json(error)
    }
}
exports.addUser = async (req, res) => {
    try {
        // const { username, email, password } = req.body
        const query = await saveUser(req.body)
        debug(query)
        res.json(query)
    } catch (error) {
        res.json(error)
    }
}

exports.removeUser = async (req, res) => {
    try {
        const id = req.params.id
        const query = await deleteUser(id)
        debug(query)
        res.json(query)
    } catch (error) {
        res.status(404).json(error)
    }
}
exports.updateUser = async (req, res) => {
    try {
        const query = await updateDataUser(req.body)
        debug(query)
        res.json(query)
    } catch (error) {
        res.status(404).json(error)
    }
}
