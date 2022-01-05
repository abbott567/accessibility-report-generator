const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/', get)

module.exports = router
