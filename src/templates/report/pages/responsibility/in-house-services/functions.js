const getFilterHTML = require('./build-html')

function get (req, res) {
  const HTML = getFilterHTML()
  res.send(HTML)
}

module.exports = { get }
