const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/responsibility/third-party-services', get)

module.exports = router
