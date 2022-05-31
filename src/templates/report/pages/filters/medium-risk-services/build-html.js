const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify

function getFilterHTML () {
  const locals = buildLocals()
  locals.page = 'Filter'
  locals.risk = 'medium'

  const template = nunjucks.render('pages/filters/medium-risk-services/template.njk', locals)
  const filterHTML = minify(template, { collapseWhitespace: true })

  return filterHTML
}

module.exports = getFilterHTML
