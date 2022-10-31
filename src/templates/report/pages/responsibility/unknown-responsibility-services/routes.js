const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/responsibility/unknown-responsibility-services', get)

module.exports = router
