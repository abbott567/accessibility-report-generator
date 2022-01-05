const datefns = require('date-fns')

const Org = require('../../../model/constructors/Org')
const org = Org.all[0]

const locals = {
  Org,
  Directorate: require('../../../model/constructors/Directorate'),
  PDU: require('../../../model/constructors/PDU'),
  Service: require('../../../model/constructors/Service'),
  date: datefns.format(new Date(), 'd MMMM yyyy'),
  org
}

module.exports = locals
