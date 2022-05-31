const datefns = require('date-fns')

function checkDate (date, serviceName) {
  const allowedExceptions = ['n/a', 'unknown']
  if (!allowedExceptions.includes(date)) {
    let parsed
    const format = [
      'MMMM yyyy', 'MMMM yy', 'd MMMM yyyy', 'd MMMM yy', 'dd MMMM yyyy', 'dd MMMM yy',
      'mm/yyyy', 'mm/yy', 'd/mm/yyyy', 'd/mm/yy', 'dd/mm/yyyy', 'dd/mm/yy', 'mm-yyyy', 'mm-yy',
      'd-mm-yyyy', 'd-mm-yy', 'dd-mm-yyyy', 'dd-mm-yy'
    ]
    format.forEach(attempt => {
      const parseAttempt = datefns.parse(date, attempt, new Date())
      const isDate = isValidDate(parseAttempt)
      if (isDate && !parsed) parsed = parseAttempt
    })
    if (!parsed) throw Error(`Date not valid when constructing service: ${serviceName} - ${date}`)
  }
  return date
}

function isValidDate (date) {
  return date instanceof Date && !isNaN(date)
}

module.exports = { checkDate, isValidDate }