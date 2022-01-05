const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/filters/critical-services', get)

module.exports = router
