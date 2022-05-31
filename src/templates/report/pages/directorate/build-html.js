const path = require('path')
const buildLocals = require(path.resolve('src', 'templates', 'report', 'lib', 'build-locals'))
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const minify = require('html-minifier').minify

function getDirectorateHTML (directorate) {
  const locals = buildLocals()
  locals.page = 'Directorate'
  locals.directorate = directorate
  const template = nunjucks.render('pages/directorate/template.njk', locals)
  const directorateHTML = minify(template, { collapseWhitespace: true })

  return directorateHTML
}

module.exports = getDirectorateHTML
