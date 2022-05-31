require('colors')
const path = require('path')

const cleanTodayFolder = require('./tasks/export:emails--clean-today')
const buildAllEmails = require('./tasks/export:emails--build-all')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

async function runBuild () {
  const { Org, PDU } = buildDataModel()
  await cleanTodayFolder()
  await buildAllEmails(Org, PDU)
}

runBuild()
