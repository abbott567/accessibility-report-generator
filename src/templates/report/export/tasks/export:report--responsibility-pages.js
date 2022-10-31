const overwriteURLs = require('../../lib/overwrite-urls')
const saveHTML = require('../../../../utils/save-html')
const todayDate = require('../../../../utils/today-date')

async function buildResponsibilityPage (filter) {
  const getHTML = require(`../../pages/responsibility/${filter}/build-html`)
  const html = { raw: getHTML() }
  html.local = await overwriteURLs(html.raw, 'level2')
  await saveHTML(html.local, `output/reports/${todayDate}/responsibility/${filter}`)
  console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/responsibility/${filter}.html`)
}

async function buildResponsibilityPages () {
  buildResponsibilityPage('in-house-services')
  buildResponsibilityPage('third-party-services')
  buildResponsibilityPage('unknown-responsibility-services')
}

module.exports = buildResponsibilityPages
