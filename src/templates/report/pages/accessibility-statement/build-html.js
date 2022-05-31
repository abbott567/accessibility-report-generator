const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

function getAccessibilityHTML () {
  const { Org, Directorate, PDU, Service } = buildDataModel('test')
  const locals = buildLocals(Org, Directorate, PDU, Service)
  const template = nunjucks.render('pages/accessibility-statement/template.njk', locals)
  const accessibilityHTML = minify(template, { collapseWhitespace: true })
  return accessibilityHTML
}

module.exports = getAccessibilityHTML
