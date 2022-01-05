const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/accessibility-statement', get)

module.exports = router
