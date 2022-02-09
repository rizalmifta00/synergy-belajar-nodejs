const Express = require('express')
const App = Express()
const PORT = 5000
const Morgan = require('morgan')
const Dotenv = require('dotenv')
const Cors = require('cors')

// Setting Nodejs Environtment
App.set('view engine', 'ejs')
App.use(Express.static('public'))
App.use(Morgan('tiny'))
App.use(Express.urlencoded({ extended: true })) // Type Data Form
App.use(Express.json()) // Type Data JSON
Dotenv.config({ path: './config/Config.env' })

// MongoDB Connection
const ConnectMongoDB = require('./models/mongodb/Connection')
ConnectMongoDB()

// Use Express Endpoint
App.listen(PORT, function() {
    console.log(`Server is running in port : ` + PORT)
})

// Routing
const Routing = require('./routes/routes')
App.use(Routing)