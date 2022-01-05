
const nunjucks = require('../../../lib/nunjucks')
const minify = require('html-minifier').minify

function getFilterHTML () {
  const locals = require('../../../lib/build-locals')
  locals.page = 'Filter'
  locals.type = 'staff'

  const template = nunjucks.render('pages/filters/staff-facing-services/template.njk', locals)
  const filterHTML = minify(template, { collapseWhitespace: true })

  return filterHTML
}

module.exports = getFilterHTML
