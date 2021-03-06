require('colors')
const Excel = require('exceljs')
const date = require('../../../utils/today-date')
const fs = require('fs-jetpack')

const { Org, Directorate, PDU, Service } = require('../../../model/build-data-model')()
const cleanTodayFolder = require('./tasks/export:excel--clean-today')
const generateOverviewWorksheet = require('./tasks/export:excel--worksheet-overview')
const generateDirectoratesWorksheet = require('./tasks/export:excel--worksheet-directorates')
const generatePDUsWorksheet = require('./tasks/export:excel--worksheet-pdus')
const generateServicesWorksheet = require('./tasks/export:excel--worksheet-services')

const tabNames = {
  org: 'Org',
  directorates: 'Directorates',
  pdus: 'PDUs',
  services: 'Services'
}

async function buildExcel () {
  const workbook = new Excel.Workbook()
  const overrideExists = fs.exists('./src/templates/excel/export/overrides/tab-names.js')
  if (overrideExists) {
    const overrideTabNames = require('./overrides/tab-names')
    overrideTabNames(tabNames)
  }
  generateOverviewWorksheet(workbook, Org, tabNames.org)
  generateDirectoratesWorksheet(workbook, Directorate, tabNames.directorates)
  generatePDUsWorksheet(workbook, PDU, tabNames.pdus)
  generateServicesWorksheet(workbook, Service, tabNames.services)
  await workbook.xlsx.writeFile(`output/excel/${date}/${date}-stats.xlsx`)
}

async function runBuild () {
  await cleanTodayFolder()
  buildExcel()
}

runBuild()
