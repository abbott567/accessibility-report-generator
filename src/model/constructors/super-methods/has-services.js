const percent = require('../../../utils/percent')

class SuperMethodHasServices {
  #services = []
  stats = {
    services: { all: {}, citizen: {}, staff: {} },
    rates: { true_compliance: {}, adjusted_compliance: {} }
  }

  registerService (service) {
    this.#services.push(service)
    this.#generateStats()
  }

  getServices (filter) {
    if (!filter) return this.#services
    const filterLength = Object.keys(filter).length

    if (filterLength === 3) {
      if (filter.status && filter.risk && filter.type) {
        const nonCompliantFilter = (/!compliant/).test(filter.risk)
        if (nonCompliantFilter) return this.#services.filter(x => x.status === filter.status && x.risk !== 'compliant' && x.type === filter.type)
        else return this.#services.filter(x => x.status === filter.status && x.risk === filter.risk && x.type === filter.type)
      }
      if (filter.type && filter.plans && filter.status) return this.#services.filter(x => x.type === filter.type && x.plans === filter.plans && x.status === filter.status)
    } else if (filterLength === 2) {
      if (filter.plans && filter.status) return this.#services.filter(x => x.plans === filter.plans && x.status === filter.status)
      if (filter.type && filter.status) return this.#services.filter(x => x.type === filter.type && x.status === filter.status)
      if (filter.type && filter.risk) {
        const nonCompliantFilter = (/!compliant/).test(filter.risk)
        if (nonCompliantFilter) return this.#services.filter(x => x.type === filter.type && x.risk !== 'compliant')
        else return this.#services.filter(x => x.type === filter.type && x.risk === filter.risk)
      }
      if (filter.status && filter.risk) {
        const nonCompliantFilter = (/!compliant/).test(filter.risk)
        if (nonCompliantFilter) return this.#services.filter(x => x.status === filter.status && x.risk !== 'compliant')
        else return this.#services.filter(x => x.status === filter.status && x.risk === filter.risk)
      }
      if (filter.type && filter.legacy) return this.#services.filter(x => x.type === filter.type && x.legacy === filter.legacy)
      if (filter.type && filter.critical) return this.#services.filter(x => x.type === filter.type && x.critical === filter.critical)
      if (filter.type && filter.sunsetting) return this.#services.filter(x => x.type === filter.type && x.sunsetting === filter.sunsetting)
      if (filter.type && filter.plans) return this.#services.filter(x => x.type === filter.type && x.plans === filter.plans)
    } else {
      if (filter.type) return this.#services.filter(x => x.type === filter.type)
      if (filter.status) return this.#services.filter(x => x.status === filter.status)
      if (filter.critical) return this.#services.filter(x => x.critical === filter.critical)
      if (filter.sunsetting) return this.#services.filter(x => x.sunsetting === filter.sunsetting)
      if (filter.plans) return this.#services.filter(x => x.plans === filter.plans)
      if (filter.legacy) return this.#services.filter(x => x.legacy === filter.legacy)
      if (filter.thirdParty) return this.#services.filter(x => x.thirdParty === filter.thirdParty)
      if (filter.risk) {
        const nonCompliantFilter = (/!compliant/).test(filter.risk)
        if (nonCompliantFilter) return this.#services.filter(x => x.risk !== 'compliant')
        else return this.#services.filter(x => x.risk === filter.risk)
      }
    }
    return []
  }

  getNumberOfServices (filter) {
    const services = this.getServices(filter)
    return services.length
  }

  #generateStats () {
    this.stats.services.all.total = this.getNumberOfServices()
    this.stats.services.all.live = this.getNumberOfServices({ status: 'live' })
    this.stats.services.all.not_live = this.getNumberOfServices({ status: 'not-live' })
    this.stats.services.all.compliant = this.getNumberOfServices({ risk: 'compliant' })
    this.stats.services.all.live_compliant = this.getNumberOfServices({ status: 'live', risk: 'compliant' })
    this.stats.services.all.not_compliant = this.getNumberOfServices({ risk: '!compliant' })
    this.stats.services.all.live_not_compliant = this.getNumberOfServices({ status: 'live', risk: '!compliant' })
    this.stats.services.all.risk_very_high = this.getNumberOfServices({ risk: 'very-high' })
    this.stats.services.all.risk_high = this.getNumberOfServices({ risk: 'high' })
    this.stats.services.all.risk_medium = this.getNumberOfServices({ risk: 'medium' })
    this.stats.services.all.risk_low = this.getNumberOfServices({ risk: 'low' })
    this.stats.services.all.risk_unknown = this.getNumberOfServices({ risk: 'unknown' })
    this.stats.services.all.critical = this.getNumberOfServices({ critical: 'true' })
    this.stats.services.all.not_critical = this.getNumberOfServices({ critical: 'false' })
    this.stats.services.all.sunsetting = this.getNumberOfServices({ sunsetting: 'true' })
    this.stats.services.all.not_sunsetting = this.getNumberOfServices({ sunsetting: 'false' })
    this.stats.services.all.plans = this.getNumberOfServices({ plans: 'true' })
    this.stats.services.all.no_plans = this.getNumberOfServices({ plans: 'false' })
    this.stats.services.all.live_no_plans = this.getNumberOfServices({ plans: 'false', status: 'live' })
    this.stats.services.all.legacy = this.getNumberOfServices({ legacy: 'true' })
    this.stats.services.all.in_house = this.getNumberOfServices({ thirdParty: 'false' })
    this.stats.services.all.third_party = this.getNumberOfServices({ thirdParty: 'true' })
    this.stats.services.all.unknown_responsibility = this.getNumberOfServices({ thirdParty: 'unknown' })

    this.stats.services.citizen.total = this.getNumberOfServices({ type: 'citizen' })
    this.stats.services.citizen.live = this.getNumberOfServices({ type: 'citizen', status: 'live' })
    this.stats.services.citizen.not_live = this.getNumberOfServices({ type: 'citizen', status: 'not-live' })
    this.stats.services.citizen.compliant = this.getNumberOfServices({ type: 'citizen', risk: 'compliant' })
    this.stats.services.citizen.live_compliant = this.getNumberOfServices({ status: 'live', type: 'citizen', risk: 'compliant' })
    this.stats.services.citizen.not_compliant = this.getNumberOfServices({ type: 'citizen', risk: '!compliant' })
    this.stats.services.citizen.live_not_compliant = this.getNumberOfServices({ status: 'live', type: 'citizen', risk: '!compliant' })
    this.stats.services.citizen.risk_very_high = this.getNumberOfServices({ type: 'citizen', risk: 'very-high' })
    this.stats.services.citizen.risk_high = this.getNumberOfServices({ type: 'citizen', risk: 'high' })
    this.stats.services.citizen.risk_medium = this.getNumberOfServices({ type: 'citizen', risk: 'medium' })
    this.stats.services.citizen.risk_low = this.getNumberOfServices({ type: 'citizen', risk: 'low' })
    this.stats.services.citizen.risk_unknown = this.getNumberOfServices({ type: 'citizen', risk: 'unknown' })
    this.stats.services.citizen.critical = this.getNumberOfServices({ type: 'citizen', critical: 'true' })
    this.stats.services.citizen.not_critical = this.getNumberOfServices({ type: 'citizen', critical: 'false' })
    this.stats.services.citizen.sunsetting = this.getNumberOfServices({ type: 'citizen', sunsetting: 'true' })
    this.stats.services.citizen.not_sunsetting = this.getNumberOfServices({ type: 'citizen', sunsetting: 'false' })
    this.stats.services.citizen.plans = this.getNumberOfServices({ type: 'citizen', plans: 'true' })
    this.stats.services.citizen.no_plans = this.getNumberOfServices({ type: 'citizen', plans: 'false' })
    this.stats.services.citizen.live_no_plans = this.getNumberOfServices({ type: 'citizen', plans: 'false', status: 'live' })
    this.stats.services.citizen.legacy = this.getNumberOfServices({ type: 'citizen', legacy: 'true' })

    this.stats.services.staff.total = this.getNumberOfServices({ type: 'staff' })
    this.stats.services.staff.live = this.getNumberOfServices({ type: 'staff', status: 'live' })
    this.stats.services.staff.not_live = this.getNumberOfServices({ type: 'staff', status: 'not-live' })
    this.stats.services.staff.compliant = this.getNumberOfServices({ type: 'staff', risk: 'compliant' })
    this.stats.services.staff.live_compliant = this.getNumberOfServices({ status: 'live', type: 'staff', risk: 'compliant' })
    this.stats.services.staff.not_compliant = this.getNumberOfServices({ type: 'staff', risk: '!compliant' })
    this.stats.services.staff.live_not_compliant = this.getNumberOfServices({ status: 'live', type: 'staff', risk: '!compliant' })
    this.stats.services.staff.risk_very_high = this.getNumberOfServices({ type: 'staff', risk: 'very-high' })
    this.stats.services.staff.risk_high = this.getNumberOfServices({ type: 'staff', risk: 'high' })
    this.stats.services.staff.risk_medium = this.getNumberOfServices({ type: 'staff', risk: 'medium' })
    this.stats.services.staff.risk_low = this.getNumberOfServices({ type: 'staff', risk: 'low' })
    this.stats.services.staff.risk_unknown = this.getNumberOfServices({ type: 'staff', risk: 'unknown' })
    this.stats.services.staff.critical = this.getNumberOfServices({ type: 'staff', critical: 'true' })
    this.stats.services.staff.not_critical = this.getNumberOfServices({ type: 'staff', critical: 'false' })
    this.stats.services.staff.sunsetting = this.getNumberOfServices({ type: 'staff', sunsetting: 'true' })
    this.stats.services.staff.not_sunsetting = this.getNumberOfServices({ type: 'staff', sunsetting: 'false' })
    this.stats.services.staff.plans = this.getNumberOfServices({ type: 'staff', plans: 'true' })
    this.stats.services.staff.no_plans = this.getNumberOfServices({ type: 'staff', plans: 'false' })
    this.stats.services.staff.live_no_plans = this.getNumberOfServices({ type: 'staff', plans: 'false', status: 'live' })
    this.stats.services.staff.legacy = this.getNumberOfServices({ type: 'staff', legacy: 'true' })

    this.stats.rates.true_compliance.total = percent(this.stats.services.all.live_compliant).of(this.stats.services.all.live)
    this.stats.rates.true_compliance.citizen = percent(this.stats.services.citizen.live_compliant).of(this.stats.services.citizen.live)
    this.stats.rates.true_compliance.staff = percent(this.stats.services.staff.live_compliant).of(this.stats.services.staff.live)

    this.stats.rates.adjusted_compliance.total = percent(this.stats.services.all.live_compliant).of(this.stats.services.all.live - this.stats.services.all.live_no_plans)
    this.stats.rates.adjusted_compliance.citizen = percent(this.stats.services.citizen.live_compliant).of(this.stats.services.citizen.live - this.stats.services.citizen.live_no_plans)
    this.stats.rates.adjusted_compliance.staff = percent(this.stats.services.staff.live_compliant).of(this.stats.services.staff.live - this.stats.services.staff.live_no_plans)
  }
}

module.exports = SuperMethodHasServices
