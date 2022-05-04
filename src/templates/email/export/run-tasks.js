require('colors')
const cleanTodayFolder = require('./tasks/export:emails--clean-today')
const buildAllEmails = require('./tasks/export:emails--build-all')

async function runBuild () {
  await cleanTodayFolder()
  await buildAllEmails()
}

runBuild()
