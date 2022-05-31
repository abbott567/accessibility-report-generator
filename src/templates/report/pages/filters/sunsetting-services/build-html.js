const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify

function getFilterHTML (filter) {
  const locals = buildLocals()
  locals.page = 'Filter'
  locals.filter = filter
  locals.tag = 'sunsetting'

  const template = nunjucks.render('pages/filters/sunsetting-services/template.njk', locals)
  const filterHTML = minify(template, { collapseWhitespace: true })

  return filterHTML
}

module.exports = getFilterHTML
