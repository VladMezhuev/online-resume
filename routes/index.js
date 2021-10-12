//  importing express to let us create server
const express = require('express')
//  assigning router constructor
const indexRouter = express.Router()
// default get route
indexRouter.get('/', (req,res) => {
    res.render('index')
})
// custom post route
indexRouter.post('/', (req, res) => {
    // simple request validation
    if(req.body.send_email && req.body.name && req.body.email) {
        res.render('index', { 
            // custom message based on send_email checkbox
            message: `Thanks for subscription,${req.body.name}.  We will contact You soon!`,
            success: true
            // feel free to customize messages or add some more variables 
            // they will be avialable in pug template under #{variable} delimeters
        })
    } else if(!req.body.send_email && req.body.name && req.body.email) {
        res.render('index', {
            // custom message based on send_email checkbox
            message: `Thanks,${req.body.name}.  We will contact You soon!`,
            success: true
        })
    } else {
        res.render('index', {
            // validation fail message
            message: 'There are some mess in one or more fields.',
            success: false
        })
    }
})
// exporting index router to your app
module.exports = indexRouter
// it will be imported on line 12 at index.js

