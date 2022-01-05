const getNextStepsHTML = require('./build-html')

function get (req, res) {
  const HTML = getNextStepsHTML()
  res.send(HTML)
}

module.exports = { get }
