const getDirectorateHTML = require('./build-html')

function get (req, res) {
  const directorateHTML = getDirectorateHTML(req.params.directorate)
  res.send(directorateHTML)
}

module.exports = { get }
