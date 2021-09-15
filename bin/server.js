'use strict'

const chalk = require('chalk')
const app = require('../app')
const server = require('http').createServer(app)
const port = process.env.PORT || 3003

require('../src/config/mongoDb.js')

server.listen(port,()=>{
    console.log(chalk.yellow.italic(`Server listening on http://localhost:${port}`))
})
