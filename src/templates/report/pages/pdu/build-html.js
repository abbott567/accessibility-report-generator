const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify

function getPDUHTML (pdu) {
  const locals = buildLocals()
  locals.pdu = pdu
  const template = nunjucks.render('pages/pdu/template.njk', locals)
  const pduHTML = minify(template, { collapseWhitespace: true })
  return pduHTML
}

module.exports = getPDUHTML
