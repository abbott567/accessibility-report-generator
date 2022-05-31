const datefns = require('date-fns')
const path = require('path')

function buildEmailLocals () {
  const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
  const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
  const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
  const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
  const locals = {
    Org,
    Directorate,
    PDU,
    Service,
    date: datefns.format(new Date(), 'd MMMM yyyy'),
    org: Org.all[0]
  }
  return locals
}

module.exports = buildEmailLocals
