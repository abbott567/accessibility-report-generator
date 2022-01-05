function overridePDUs (pdus) {
  pdus.forEach(pdu => {
    if (pdu.slug === 'jaguar-sanctuary') {
      pdu.name = 'The Jaguar Sanctuary'
    }
  })
  return pdus
}

module.exports = overridePDUs
