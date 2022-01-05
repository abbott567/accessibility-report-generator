const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/filters/staff-facing-services', get)

module.exports = router
