const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/responsibility/in-house-services', get)

module.exports = router
