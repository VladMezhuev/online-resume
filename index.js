//  importing express to let us create server
const express = require('express')

// assigning express function to const
const app = express()

// importing some middleware
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')

// importing index route
const indexRouter = require('./routes/index.js')

// let app use body parser to access post request data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())

// assigning view engine of your app
app.set('view engine', 'pug')

// assigning public folder to access styles, js and images
app.use(express.static('public'))

// using index router in your app
app.use('/', indexRouter)

// set port for your app
const port = 8081

// listen to port to launch the app
app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`)
})