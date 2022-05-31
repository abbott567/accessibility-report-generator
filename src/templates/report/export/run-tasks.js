require('colors')
const path = require('path')

const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
buildDataModel()

const cleanTodayFolder = require(path.resolve('src', 'templates', 'report', 'export', 'tasks', 'export:report--clean-today'))
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
