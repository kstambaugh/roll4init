// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings

app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')


// Controllers & Routes
app.use('/', require('./controllers/pages'))

app.get('/', (req, res) => {
    res.send('home')
})
app.post('/', (req, res) => {
    res.send('got it')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)