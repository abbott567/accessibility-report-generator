const datefns = require('date-fns')
const path = require('path')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

function buildReportLocals () {
  const { Org, Directorate, PDU, Service } = buildDataModel('test')
  const locals = {
    Org,
    Directorate,
    PDU,
    Service,
    date: datefns.format(new Date(), 'd MMMM yyyy'),
    nav: require(path.resolve('src', 'templates', 'report', 'lib', 'generate-navigation-data')),
    org: Org.all[0]
  }
  return locals
}

module.exports = buildReportLocals
