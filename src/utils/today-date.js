const datefns = require('date-fns')
const todayDate = datefns.format(new Date(), 'yyyy-MM-dd')

module.exports = todayDate
