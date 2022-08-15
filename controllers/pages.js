const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /pages')
})



module.exports = router