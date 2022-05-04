// const getEmailHTML = require('../../lib/build-html')
const saveJSON = require('../../../../utils/save-json')
const todayDate = require('../../../../utils/today-date')

const dataLoader = require('../../../../../src/utils/data-loader')
const data = dataLoader()

async function buildData () {
  await saveJSON(data, `output/data/${todayDate}`, `${todayDate}-data`)
  console.log('Data:'.red, 'JSON saved: '.cyan, `${todayDate}-data.json`)
}

module.exports = buildData
