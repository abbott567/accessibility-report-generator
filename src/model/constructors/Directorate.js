const validate = require('./validators/Directorate.validator')
const sanitise = require('./sanitisers/Directorate.sanitiser')

const Org = require('./Org')
const SuperMethodHasPDUs = require('./super-methods/has-PDUs')

class Directorate extends SuperMethodHasPDUs {
  static all = []
  static #count = 0

  class = 'Directorate'
  id = Directorate.#count += 1
  name
  alias
  orgID
  stakeholders

  constructor (params) {
    super()
    const validParams = validate.params(params)
    const sanitisedParams = sanitise.params(validParams)
    this.name = sanitisedParams.name
    this.alias = sanitisedParams.alias || ''
    this.orgID = sanitisedParams.orgID
    this.slug = sanitisedParams.slug
    this.stakeholders = sanitisedParams.stakeholders
  }

  static findBySlug (slug) {
    const directorate = Directorate.all.find(x => x.slug === slug)
    if (directorate === undefined) throw Error(`Couldnt find a Directorate with the slug: ${slug}`)
    return directorate
  }

  static findByID (id) {
    const directorate = Directorate.all.find(x => x.id === id)
    if (directorate === undefined) throw Error(`Couldnt find a Directorate with the ID: ${id}`)
    return directorate
  }

  getOrg () {
    return Org.findByID(this.orgID)
  }

  save () {
    const org = this.getOrg()
    org.registerDirectorate(this)
    Directorate.all.push(this)
  }
}

module.exports = Directorate
