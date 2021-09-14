'use strict'

const debug = require('debug')('dev')
const { saveUser, getUsers } = require('../utils/user.method')

exports.showUsers = async (req, res) => {
    try {
        const data = await getUsers()
        // const { username, email, password } = data
        res.json(data)
    } catch (error) {
        res.json({ error })
    }
}

exports.addUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const query = await saveUser(req.body)
        debug(query)
    } catch (error) {
        res.json({ error })
    }
}
