const fs = require('fs-jetpack')
const todayDate = require('../../../../utils/today-date')

async function cleanTodayFolder () {
  const todayFolder = `output/excel/${todayDate}`
  const buildExists = await fs.exists(todayFolder)
  if (buildExists) await fs.remove(todayFolder)
  await fs.dir(todayFolder)
  console.log('Excel:'.yellow, 'Cleaned: '.blue, `output/excel/${todayDate}`)
}

module.exports = cleanTodayFolder
