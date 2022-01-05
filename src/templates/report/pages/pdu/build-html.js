const locals = require('../../lib/build-locals')

const PDU = require('../../../../model/constructors/PDU')

const nunjucks = require('../../lib/nunjucks')
const minify = require('html-minifier').minify

function getPDUHTML (slug) {
  const pdu = PDU.findBySlug(slug)
  locals.pdu = pdu
  const template = nunjucks.render('pages/pdu/template.njk', locals)
  const pduHTML = minify(template, { collapseWhitespace: true })
  return pduHTML
}

module.exports = getPDUHTML
