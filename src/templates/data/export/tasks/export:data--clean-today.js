const fs = require('fs-jetpack')
const todayDate = require('../../../../utils/today-date')

async function cleanTodayFolder () {
  const todayFolder = `output/data/${todayDate}`
  const buildExists = await fs.exists(todayFolder)
  if (buildExists) await fs.remove(todayFolder)
  console.log('Data:'.red, 'Cleaned: '.blue, `output/data/${todayDate}`)
}

module.exports = cleanTodayFolder
