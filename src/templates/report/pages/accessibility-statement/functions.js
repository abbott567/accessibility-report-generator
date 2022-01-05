const getAccessibilityHTML = require('./build-html')

function get (req, res) {
  const HTML = getAccessibilityHTML()
  res.send(HTML)
}

module.exports = { get }
