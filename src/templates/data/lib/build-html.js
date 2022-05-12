const locals = require('./build-locals')

const nunjucks = require('./nunjucks')
const minify = require('html-minifier').minify

function getDiffHTML (prevData, todayData, prevMonth) {
  locals.prevMonth = prevMonth
  locals.data = { prevData, todayData }
  const template = nunjucks.render('template.njk', locals)
  const accessibilityHTML = minify(template, { collapseWhitespace: true })
  return accessibilityHTML
}

module.exports = getDiffHTML
