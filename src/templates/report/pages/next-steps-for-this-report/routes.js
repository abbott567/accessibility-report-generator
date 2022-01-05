const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/next-steps-for-this-report', get)

module.exports = router
