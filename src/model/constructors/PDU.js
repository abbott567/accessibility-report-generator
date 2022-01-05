const validate = require('./validators/PDU.validator')
const sanitise = require('./sanitisers/PDU.sanitiser')

const Org = require('./Org')
const Directorate = require('./Directorate')
const SuperMethodHasServices = require('./super-methods/has-services')

class PDU extends SuperMethodHasServices {
  static all = []
  static #count = 0

  class = 'PDU'
  id = PDU.#count += 1
  name
  slug
  alias
  orgID
  directorateID
  stakeholders

  constructor (params) {
    super()
    const validParams = validate.params(params)
    const sanitisedParams = sanitise.params(validParams)
    this.name = sanitisedParams.name
    this.alias = sanitisedParams.alias
    this.slug = sanitisedParams.slug
    this.orgID = sanitisedParams.orgID
    this.directorateID = sanitisedParams.directorateID
    this.stakeholders = sanitisedParams.stakeholders
  }

  static findById (id) {
    const pdu = PDU.all.find(x => x.id === id)
    if (pdu === undefined) throw Error(`Couldnt find a PDU with the ID: ${id}`)
    return pdu
  }

  static findBySlug (slug) {
    const pdu = PDU.all.find(x => x.slug === slug)
    if (pdu === undefined) throw Error(`Couldnt find a PDU with the slug: ${slug}`)
    return pdu
  }

  getOrg () {
    return Org.findById(this.orgID)
  }

  getDirectorate () {
    return Directorate.findById(this.directorateID)
  }

  save () {
    const org = this.getOrg()
    org.registerPDU(this)
    const directorate = this.getDirectorate()
    directorate.registerPDU(this)
    PDU.all.push(this)
  }
}

module.exports = PDU
