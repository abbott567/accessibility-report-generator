const validate = require('./validators/Service.validator')
const sanitise = require('./sanitisers/Service.sanitiser')

const Org = require('./Org')
const Directorate = require('./Directorate')
const PDU = require('./PDU')

class Service {
  static all = []
  static count = 0

  class = 'Service'
  id = Service.count += 1
  name
  alias
  orgID
  directorateID
  PDUID
  status
  type
  risk
  critical
  sunsetting
  sunsetDate
  plans
  legacy
  notes
  evidence = {}
  stats = {
    progress: 0
  }

  constructor (params) {
    const validParams = validate.params(params)
    const sanitisedParams = sanitise.params(validParams)
    this.alias = sanitisedParams.alias
    this.risk = sanitisedParams.risk
    this.critical = sanitisedParams.critical
    this.sunsetting = sanitisedParams.sunsetting
    this.sunsetDate = sanitisedParams.sunsetDate
    this.legacy = sanitisedParams.legacy
    this.plans = sanitisedParams.plans
    this.name = sanitisedParams.name
    this.slug = sanitisedParams.slug
    this.orgID = sanitisedParams.orgID
    this.directorateID = sanitisedParams.directorateID
    this.PDUID = sanitisedParams.PDUID
    this.status = sanitisedParams.status
    this.type = sanitisedParams.type
    this.evidence = sanitisedParams.evidence
    this.notes = sanitisedParams.notes
    this.#generateStats()
  }

  static findByID (id) {
    const service = Service.all.find(x => x.id === id)
    if (service === undefined) throw Error(`Couldnt find a Service with the ID: ${id}`)
    return service
  }

  static findBySlug (slug) {
    const service = Service.all.find(x => x.slug === slug)
    if (service === undefined) throw Error(`Couldnt find a Service with the slug: ${slug}`)
    return service
  }

  static filterByRisk (risk) {
    const services = Service.all.filter(x => x.risk === risk)
    return services
  }

  static filterByLegacy (legacy) {
    const services = Service.all.filter(x => x.legacy === legacy)
    return services
  }

  static filterByType (type) {
    const services = Service.all.filter(x => x.type === type)
    return services
  }

  static filterByPlans (plans) {
    const services = Service.all.filter(x => x.plans === plans)
    return services
  }

  static getCritical () {
    const services = Service.all.filter(x => x.critical === 'true')
    return services
  }

  static getSunsetting () {
    const services = Service.all.filter(x => x.sunsetting === 'true')
    return services
  }

  static getLegacy () {
    const services = Service.all.filter(x => x.legacy === 'true')
    return services
  }

  getOrg () {
    return Org.findByID(this.orgID)
  }

  getDirectorate () {
    return Directorate.findByID(this.directorateID)
  }

  getPDU () {
    return PDU.findByID(this.PDUID)
  }

  getProgress () {
    return this.stats.progress
  }

  isCompliant () {
    return this.risk === 'compliant'
  }

  isCritical () {
    return this.critical === 'true'
  }

  isLegacy () {
    return this.legacy === 'true'
  }

  save () {
    const org = this.getOrg()
    org.registerService(this)
    const directorate = this.getDirectorate()
    directorate.registerService(this)
    const pdu = this.getPDU()
    pdu.registerService(this)
    Service.all.push(this)
  }

  #generateStats () {
    if (this.evidence.wcag.status === 'basic') this.stats.progress += 15
    if (this.evidence.wcag.status === 'passed') this.stats.progress += 20
    if (this.evidence.wcag.status === 'failed') this.stats.progress += 10
    if (this.evidence.screen_reader.status === 'passed') this.stats.progress += 20
    if (this.evidence.screen_reader.status === 'failed') this.stats.progress += 10
    if (this.evidence.screen_magnifier.status === 'passed') this.stats.progress += 20
    if (this.evidence.screen_magnifier.status === 'failed') this.stats.progress += 10
    if (this.evidence.voice_controller.status === 'passed') this.stats.progress += 20
    if (this.evidence.voice_controller.status === 'failed') this.stats.progress += 10
    if (this.evidence.statement.status === 'done') this.stats.progress += 20
    if (this.evidence.statement.status === 'passed') this.stats.progress += 20
    if (this.evidence.statement.status === 'failed') this.stats.progress += 10
    if (this.status === 'live') {
      if (this.stats.progress === 100) this.risk = 'compliant'
    }
  }
}

module.exports = Service
