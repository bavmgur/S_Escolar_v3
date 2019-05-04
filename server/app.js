const morgan = require('morgan')
const bodyParser = require('body-parser')
const sassMiddleware = require('node-sass-middleware')

const routes = require('./routes/index')

const srcPath = __dirname + '/sass'
const destPath = __dirname + '/public'

module.exports = (app) => {

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(sassMiddleware({
        src: srcPath,
        dest: destPath,
        debug: true,
        prefix: '/prefix'
    }))

    routes(app)
}