const locals = require('../../lib/build-locals')

const nunjucks = require('../../lib/nunjucks')
const minify = require('html-minifier').minify

function getNextSteps (slug) {
  const template = nunjucks.render('pages/next-steps-for-this-report/template.njk', locals)
  const accessibilityHTML = minify(template, { collapseWhitespace: true })
  return accessibilityHTML
}

module.exports = getNextSteps
