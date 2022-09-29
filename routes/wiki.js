// const { Router } = require("express")
// const express = require("express")
// const app = express()
const router = require("express").Router();
const addPage = require("../views/addPage")

router.get('/', (req, res, next) => {
    res.send('hey')
})

router.post('/', (req, res, next) => {
    res.json(req.body)
    console.log(req.body)
})

router.get('/add', (req, res) => {
    res.send(addPage())
})

module.exports = router;
