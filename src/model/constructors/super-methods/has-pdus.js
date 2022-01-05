const SuperMethodHasServices = require('./has-services')

class SuperMethodHasPDUs extends SuperMethodHasServices {
  #PDUs = []

  getPDUs () {
    return this.#PDUs
  }

  registerPDU (pdu) {
    this.#PDUs.push(pdu)
  }
}

module.exports = SuperMethodHasPDUs
