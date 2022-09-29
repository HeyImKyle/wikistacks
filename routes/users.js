const router = require("express").Router()
const addPage = require("../views/addPage")


router.get('/', (req, res, next) => {
    res.send('hey')
})

router.post('/', (req, res, next) => {
    res.send('the posting one')
})

router.get('/add', (req, res, next) => {
    res.send(addPage())
})

module.exports = router
