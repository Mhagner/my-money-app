const port = 3003

const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const allowCors = require('./cors')
const queryParse = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParse())

server.listen(port, function(){
    console.log(`Servidor backend rodando na porta ${port}.`)
})

module.exports = server
