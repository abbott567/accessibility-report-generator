const express = require('express')
const router = express.Router()

const { get } = require('./functions')

router.get('/filters/medium-risk-services', get)

module.exports = router
