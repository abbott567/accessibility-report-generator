
const nunjucks = require('../../../lib/nunjucks')
const minify = require('html-minifier').minify

function getFilterHTML (filter) {
  const locals = require('../../../lib/build-locals')
  locals.page = 'Filter'
  locals.filter = filter
  locals.tag = 'critical'

  const template = nunjucks.render('pages/filters/critical-services/template.njk', locals)
  const filterHTML = minify(template, { collapseWhitespace: true })

  return filterHTML
}

module.exports = getFilterHTML
