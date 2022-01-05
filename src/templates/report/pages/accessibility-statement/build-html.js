const locals = require('../../lib/build-locals')

const nunjucks = require('../../lib/nunjucks')
const minify = require('html-minifier').minify

function getAccessibilityHTML () {
  const template = nunjucks.render('pages/accessibility-statement/template.njk', locals)
  const accessibilityHTML = minify(template, { collapseWhitespace: true })
  return accessibilityHTML
}

module.exports = getAccessibilityHTML
