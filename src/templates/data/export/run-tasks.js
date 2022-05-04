require('colors')
const cleanTodayFolder = require('./tasks/export:data--clean-today')
const buildData = require('./tasks/export:data--build')

async function runBuild () {
  await cleanTodayFolder()
  await buildData()
}

runBuild()
