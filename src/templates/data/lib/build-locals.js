const datefns = require('date-fns')

const locals = {
  todayDate: datefns.format(new Date(), 'd MMMM yyyy')
}

module.exports = locals
