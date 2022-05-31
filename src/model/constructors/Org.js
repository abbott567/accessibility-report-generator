const validate = require('./validators/Org.validator')
const sanitise = require('./sanitisers/Org.sanitiser')

const SuperMethodHasDirectorates = require('./super-methods/has-directorates')

class Org extends SuperMethodHasDirectorates {
  static all = []
  static #count = 0

  class = 'Org'
  id = Org.#count += 1
  name
  alias
  slug
  templateData

  constructor (params) {
    super()
    const validParams = validate.params(params)
    const sanitisedParams = sanitise.params(validParams)
    this.name = sanitisedParams.name
    this.alias = sanitisedParams.alias
    this.slug = sanitisedParams.slug
    this.templateData = sanitisedParams.templateData
  }

  static findByID (id) {
    const org = Org.all.find(x => x.id === id)
    if (org === undefined) throw Error(`Couldnt find an Org with the ID: ${id}`)
    return org
  }

  save () {
    Org.all.push(this)
  }
}

module.exports = Org
