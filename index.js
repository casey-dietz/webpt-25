require('dotenv').config()

console.log("hello world")
const express = require('express')

const cors = require('cors')

const server = express()

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
    server.use(express.json())
    server.use(cors())
}
