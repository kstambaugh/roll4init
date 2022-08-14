const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send('roll')
})

app.listen(3000)