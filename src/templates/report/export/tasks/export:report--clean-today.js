const fs = require('fs-jetpack')
const todayDate = require('../../../../utils/today-date')

async function cleanTodayFolder () {
  const todayFolder = `output/reports/${todayDate}`
  const buildExists = await fs.exists(todayFolder)
  if (buildExists) await fs.remove(todayFolder)
  console.log('Report:'.magenta, 'Cleaned: '.blue, `output/reports/${todayDate}.html`)
}

module.exports = cleanTodayFolder
