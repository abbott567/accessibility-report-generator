const path = require('path')
const getPDUHTML = require('./build-html')
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))

function get (req, res) {
  const slug = req.params.pdu
  const pdu = PDU.findBySlug(slug)
  const pduHTML = getPDUHTML(pdu)
  res.send(pduHTML)
}

module.exports = { get }
