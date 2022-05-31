const path = require('path')
const getDirectorateHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'directorate', 'build-html'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))

function get (req, res) {
  const slug = req.params.directorate
  const directorate = Directorate.findBySlug(slug)
  const directorateHTML = getDirectorateHTML(directorate)
  res.send(directorateHTML)
}

module.exports = { get }
