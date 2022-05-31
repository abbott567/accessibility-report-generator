const buildLocals = require('./build-locals')
const locals = buildLocals()

const nunjucks = require('./nunjucks')
const minify = require('html-minifier').minify

function getEmailHTML (data) {
  locals.data = data
  const template = nunjucks.render('template.njk', locals)
  const accessibilityHTML = minify(template, { collapseWhitespace: true })
  return accessibilityHTML
}

module.exports = getEmailHTML
