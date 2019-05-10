const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')

const routes = require('./routes/index')


module.exports = () => {

    const app = express()

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(session({
        secret: 'super-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
    }))

    routes(app)

    return app
}