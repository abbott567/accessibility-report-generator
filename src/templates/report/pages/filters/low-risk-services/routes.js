const express = require('express')
const router = express.Router()

const { get } = require('./functions')

router.get('/filters/low-risk-services', get)

module.exports = router
