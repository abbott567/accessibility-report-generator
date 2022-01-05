const nav = require('../../lib/generate-navigation-data')
const overwriteURLs = require('../../lib/overwrite-urls')
const saveHTML = require('../../../../utils/save-html')
const todayDate = require('../../../../utils/today-date')

async function buildOverviewPage () {
  const getHTML = require('../../pages/overview/build-html')
  const html = { raw: getHTML() }
  html.local = await overwriteURLs(html.raw, 'root')
  await saveHTML(html.local, `output/reports/${todayDate}`)
  console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/overview.html`)
}

async function buildDirectoratePage (slug) {
  if (slug !== '/') {
    const name = slug[0] === '/' ? slug.substring(1) : slug
    const getHTML = require('../../pages/directorate/build-html')
    const html = { raw: getHTML(name) }
    html.local = await overwriteURLs(html.raw, 'level1')
    await saveHTML(html.local, `output/reports/${todayDate}/${name}`)
    console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/${name}.html`)
  }
}

async function buildPDUPage (slug) {
  if (slug !== '/') {
    const sanitisedSlug = slug[0] === '/' ? slug.substring(1) : slug
    const name = sanitisedSlug.split('/').pop()
    const getHTML = require('../../pages/pdu/build-html')
    const html = { raw: getHTML(name) }
    html.local = await overwriteURLs(html.raw, 'level2')
    await saveHTML(html.local, `output/reports/${todayDate}/${sanitisedSlug}`)
    console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/${sanitisedSlug}.html`)
  }
}

async function buildOrgPages () {
  buildOverviewPage()
  for (const x in nav.main) {
    await buildDirectoratePage(nav.main[x].link)
    for (const y in nav.main[x].children) {
      await buildPDUPage(nav.main[x].children[y].link)
    }
  }
}

module.exports = buildOrgPages
