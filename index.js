require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/second', (req, res) => {
    res.send('My Second Page!')
})

app.listen(process.env.PORT, () => console.log('connected on PORT 3000'))