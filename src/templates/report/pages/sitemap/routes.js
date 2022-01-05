const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/sitemap', get)

module.exports = router
