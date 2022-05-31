const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify

function getOverview () {
  const locals = buildLocals()
  locals.page = 'overview'
  const overview = nunjucks.render('pages/overview/template.njk', locals)
  const overviewHTML = minify(overview, { collapseWhitespace: true })
  return overviewHTML
}

module.exports = getOverview
