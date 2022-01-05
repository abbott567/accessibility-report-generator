const getPDUHTML = require('./build-html')

function get (req, res) {
  const pduHTML = getPDUHTML(req.params.pdu)
  res.send(pduHTML)
}

module.exports = { get }
