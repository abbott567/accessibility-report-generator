const getSiteMap = require('./build-html')

function get (req, res) {
  const HTML = getSiteMap()
  res.send(HTML)
}

module.exports = { get }
