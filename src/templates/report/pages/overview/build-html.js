const locals = require('../../lib/build-locals')

const nunjucks = require('../../lib/nunjucks')
const minify = require('html-minifier').minify

function getOverview () {
  locals.page = 'overview'
  const overview = nunjucks.render('pages/overview/template.njk', locals)
  const overviewHTML = minify(overview, { collapseWhitespace: true })
  return overviewHTML
}

module.exports = getOverview
