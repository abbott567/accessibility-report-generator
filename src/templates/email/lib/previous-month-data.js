const fs = require('fs-jetpack')
const datefns = require('date-fns')
const todayDate = require('../../../utils/today-date')

async function getPreviousMonth (pdu) {
  const previousMonthsScrape = await fs.list('output/emails')
  if (previousMonthsScrape) {
    const previousMonths = previousMonthsScrape.filter(x => x !== '.DS_Store')
    if (previousMonths.length > 0) {
      let previousMonthsAsDates = previousMonths.map(x => datefns.parseISO(x))
      previousMonthsAsDates = previousMonthsAsDates.filter(x => !isNaN(x.getTime()))
      let previousMonthDate = null
      if (previousMonths.length > 0) previousMonthDate = datefns.format(datefns.closestTo(datefns.parseISO(todayDate), previousMonthsAsDates), 'yyyy-MM-dd')
      return previousMonthDate
    }
  }
  return undefined
}

async function getPreviousMonthData (pdu) {
  const date = await getPreviousMonth(pdu)
  const checkForPreviousMonth = await fs.exists(`output/emails/${date}/_data.json`)
  if (checkForPreviousMonth) {
    const previousMonthData = await require(`../../../../output/emails/${date}/_data.json`)
    const previousMonthObj = previousMonthData.find(x => x.pdu.slug === pdu.slug)
    if (previousMonthObj) {
      const previousMonthPDU = previousMonthObj.thisMonth.pdu
      return previousMonthPDU
    }
  }
  return undefined
}

module.exports = getPreviousMonthData
