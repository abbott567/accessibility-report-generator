const express = require('express')
const router = express.Router()

const { get } = require('./functions')

router.get('/filters/very-high-risk-services', get)

module.exports = router
