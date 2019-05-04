const morgan = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes/index')

module.exports = (app) => {

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    routes(app)
}