const fs = require('fs-jetpack')
const todayDate = require('../../../../utils/today-date')

async function cleanTodayFolder () {
  const todayFolder = `output/emails/${todayDate}`
  const buildExists = await fs.exists(todayFolder)
  if (buildExists) await fs.remove(todayFolder)
  console.log('Emails:'.green, 'Cleaned: '.blue, `output/emails/${todayDate}`)
}

module.exports = cleanTodayFolder
