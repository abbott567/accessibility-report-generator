const path = require('path')
const overwriteURLs = require(path.resolve('src', 'templates', 'report', 'lib', 'overwrite-urls'))
const saveHTML = require(path.resolve('src', 'utils', 'save-html'))
const todayDate = require(path.resolve('src', 'utils', 'today-date'))

async function buildFilterPage (filter) {
  const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'filters', filter, 'build-html'))
  const html = { raw: getHTML() }
  html.local = await overwriteURLs(html.raw, 'level2')
  await saveHTML(html.local, `output/reports/${todayDate}/filters/${filter}`)
  console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/filters/${filter}.html`)
}

async function buildFilterPages (slug) {
  buildFilterPage('compliant-services')
  buildFilterPage('very-high-risk-services')
  buildFilterPage('high-risk-services')
  buildFilterPage('medium-risk-services')
  buildFilterPage('low-risk-services')
  buildFilterPage('unknown-risk-services')
  buildFilterPage('citizen-facing-services')
  buildFilterPage('staff-facing-services')
  buildFilterPage('sunsetting-services')
  buildFilterPage('critical-services')
  buildFilterPage('no-plans-for-compliance')
  buildFilterPage('legacy-services')
}

module.exports = buildFilterPages
