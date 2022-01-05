const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/filters/no-plans-for-compliance', get)

module.exports = router
