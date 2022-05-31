const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))

function cleanDataModel () {
  Org.all = []
  Directorate.all = []
  PDU.all = []
  Service.all = []
}

module.exports = cleanDataModel
