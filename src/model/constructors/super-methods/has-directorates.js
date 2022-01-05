const SuperMethodHasPDUs = require('./has-pdus')

class SuperMethodHasDirectorates extends SuperMethodHasPDUs {
  #directorates = []

  getDirectorates () {
    return this.#directorates
  }

  registerDirectorate (directorate) {
    this.#directorates.push(directorate)
  }
}

module.exports = SuperMethodHasDirectorates
