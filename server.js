// Essential modules
require('colors')
const path = require('path')

// Build structured objects from data files
const buildDataModel = require('./src/model/build-data-model')
buildDataModel()

// Configure expressJS
const express = require('express')
const app = express()
// -- Configure Favicon
const favicon = require('serve-favicon')
app.use(favicon(path.join('src', 'templates', 'report', 'assets', 'favicon', 'favicon.ico')))
// -- Configure routes
const routes = require('./src/templates/report/lib/routes')
app.use(routes)

// Listen on localhost:3000
app.listen(3000, console.log('listening on http://localhost:3000'))
