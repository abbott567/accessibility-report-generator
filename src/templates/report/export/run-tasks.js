require('colors')
const buildDataModel = require('../../../model/build-data-model')
buildDataModel()

const cleanTodayFolder = require('./tasks/export:report--clean-today')
const buildStaticPages = require('./tasks/export:report--static-pages')
const buildOrgPages = require('./tasks/export:report--org-pages')
const buildFilterPages = require('./tasks/export:report--filter-pages')

async function runBuild () {
  await cleanTodayFolder()
  buildStaticPages()
  buildFilterPages()
  buildOrgPages()
}

runBuild()
