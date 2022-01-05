const express = require('express')
const router = express.Router()

const { get } = require('./functions')

router.get('/filters/unknown-risk-services', get)

module.exports = router
