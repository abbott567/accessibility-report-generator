const buildOverviewHTML = require('./build-html')

function get (req, res) {
  const overviewHTML = buildOverviewHTML()
  res.send(overviewHTML)
}

module.exports = { get }
