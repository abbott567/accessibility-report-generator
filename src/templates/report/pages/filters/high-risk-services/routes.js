const express = require('express')
const router = express.Router()

const { get } = require('./functions')

router.get('/filters/high-risk-services', get)

module.exports = router
