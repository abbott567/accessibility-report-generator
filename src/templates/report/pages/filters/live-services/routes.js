const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/filters/live-services', get)

module.exports = router
