const path = require('path')
const todayDate = require(path.resolve('src', 'utils', 'today-date'))
const cleanFolder = require(path.resolve('src', 'utils', 'clean-folder'))

async function cleanTodayFolder () {
  const folder = `output/reports/${todayDate}`
  const message = 'Report: '.magenta + 'Cleaned: '.blue + folder
  await cleanFolder(folder, message)
}

module.exports = cleanTodayFolder
