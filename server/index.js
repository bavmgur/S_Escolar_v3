const express = require('express')
<<<<<<< HEAD
=======
//const bodyParser = require('body-parser')
//5const session = require('express-session')
>>>>>>> frontend
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const conn = require('./models/index').sequelize


const app = express()

require('./app')(app)



// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    conn
        .authenticate()
        .then(async() => {
            consola.ready({
                message: `Conectado a la base de datos con exito`,
                badge: true
            })
            await app.listen(port, host)
            consola.ready({
                message: `Server listening on http://${host}:${port}`,
                badge: true
            })
        })
        .catch(err => {
            consola.error({
                message: `Unable to connect to the database: ${err}`,
                badge: true
            })
        })

}

start()