'use strict'

const app = require('../app')
const server = require('http').createServer(app)
const port = process.env.PORT || 3003

require('../src/config/mongoDb.js')

server.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`)
})
