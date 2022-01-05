const locals = require('../../lib/build-locals')

const Directorate = require('../../../../model/constructors/Directorate')

const nunjucks = require('../../lib/nunjucks')
const minify = require('html-minifier').minify

function getDirectorateHTML (slug) {
  const directorate = Directorate.findBySlug(slug)
  locals.page = 'Directorate'
  locals.directorate = directorate

  const template = nunjucks.render('pages/directorate/template.njk', locals)
  const directorateHTML = minify(template, { collapseWhitespace: true })

  return directorateHTML
}

module.exports = getDirectorateHTML
