const path = require('path')
const nav = require(path.resolve('src', 'templates', 'report', 'lib', 'generate-navigation-data'))
const overwriteURLs = require(path.resolve('src', 'templates', 'report', 'lib', 'overwrite-urls'))
const saveHTML = require(path.resolve('src', 'utils', 'save-html'))
const todayDate = require(path.resolve('src', 'utils', 'today-date'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))

async function buildOverviewPage () {
  const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'overview', 'build-html'))
  const html = { raw: getHTML() }
  html.local = await overwriteURLs(html.raw, 'root')
  await saveHTML(html.local, `output/reports/${todayDate}`)
  console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/overview.html`)
}

async function buildDirectoratePage (url) {
  if (url !== '/') {
    const slug = url[0] === '/' ? url.substring(1) : url
    const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'directorate', 'build-html'))
    const directorate = Directorate.findBySlug(slug)
    const html = { raw: getHTML(directorate) }
    html.local = await overwriteURLs(html.raw, 'level1')
    await saveHTML(html.local, `output/reports/${todayDate}/${slug}`)
    console.log('Report:'.magenta, 'HTML saved: '.cyan, `output/reports/${todayDate}/${slug}.html`)
  }
}

async function buildPDUPage (url) {
  if (url !== '/') {
    const sanitisedSlug = url[0] === '/' ? url.substring(1) : url
    const slug = sanitisedSlug.split('/').pop()
    const pdu = PDU.findBySlug(slug)
    const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'pdu', 'build-html'))
    const html = { raw: getHTML(pdu) }
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
