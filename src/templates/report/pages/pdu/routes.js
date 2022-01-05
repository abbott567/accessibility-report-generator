const express = require('express')
const router = express.Router()
const { get } = require('./functions')

router.get('/:directorate/:pdu', get)

module.exports = router
