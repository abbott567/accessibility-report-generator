const locals = require('../../lib/build-locals')

const nunjucks = require('../../lib/nunjucks')
const minify = require('html-minifier').minify

function getSiteMap () {
  const template = nunjucks.render('pages/sitemap/template.njk', locals)
  const accessibilityHTML = minify(template, { collapseWhitespace: true })
  return accessibilityHTML
}

module.exports = getSiteMap
