const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify

function getFilterHTML () {
  const locals = buildLocals()
  locals.page = 'Filter'
  locals.type = 'citizen'

  const template = nunjucks.render('pages/filters/citizen-facing-services/template.njk', locals)
  const filterHTML = minify(template, { collapseWhitespace: true })

  return filterHTML
}

module.exports = getFilterHTML
