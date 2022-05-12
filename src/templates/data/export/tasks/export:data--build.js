// const getEmailHTML = require('../../lib/build-html')
const saveJSON = require('../../../../utils/save-json')
const todayDate = require('../../../../utils/today-date')

const dataLoader = require('../../../../../src/utils/data-loader')
const data = dataLoader()

const fs = require('fs-jetpack')
const datefns = require('date-fns')
async function getPreviousMonth (todayDate) {
  const previousMonthsScrape = await fs.list('output/data')
  if (previousMonthsScrape) {
    let previousMonths = previousMonthsScrape.filter(x => x !== '.DS_Store')
    if (previousMonths.length > 0) {
      previousMonths = previousMonths.filter(item => item !== todayDate)
      let previousMonthsAsDates = previousMonths.map(x => datefns.parseISO(x))
      previousMonthsAsDates = previousMonthsAsDates.filter(x => !isNaN(x.getTime()))
      let previousMonthDate = null
      if (previousMonths.length > 0) previousMonthDate = datefns.format(datefns.closestTo(datefns.parseISO(todayDate), previousMonthsAsDates), 'yyyy-MM-dd')
      return previousMonthDate
    }
  }
  return undefined
}
const getDiffHTML = require('../../lib/build-html')
const saveHTML = require('../../../../utils/save-html')
async function buildDiff (todayData) {
  const dir = `output/data/${todayDate}`
  const prevMonth = await getPreviousMonth(todayDate)
  const prevData = require(`../../../../../output/data/${prevMonth}/${prevMonth}-data.json`)
  const html = await getDiffHTML(prevData, todayData, datefns.format(datefns.parseISO(prevMonth), 'd MMMM yyyy'))
  await saveHTML(html, dir, `${todayDate}-diff`)
  console.log('Data:'.red, 'Diff saved'.cyan)
}

async function buildData () {
  await saveJSON(data, `output/data/${todayDate}`, `${todayDate}-data`)
  await buildDiff(data)
  console.log('Data:'.red, 'JSON saved: '.cyan, `${todayDate}-data.json`)
}

module.exports = buildData
