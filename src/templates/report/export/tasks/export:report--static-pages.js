const path = require('path')
const saveHTML = require(path.resolve('src', 'utils', 'save-html'))
const overwriteURLs = require(path.resolve('src', 'templates', 'report', 'lib', 'overwrite-urls'))
const todayDate = require(path.resolve('src', 'utils', 'today-date'))

async function buildStaticPage (name) {
  const getHTML = require(`../../pages/${name}/build-html`)
  const html = { raw: getHTML() }
  html.local = await overwriteURLs(html.raw, 'level1')
  await saveHTML(html.local, `output/reports/${todayDate}/${name}`)
  console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/${name}.html`)
}
async function buildStaticPages () {
  buildStaticPage('accessibility-statement')
  buildStaticPage('next-steps-for-this-report')
  buildStaticPage('sitemap')
}

module.exports = buildStaticPages
