/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const PDU = require('../../../src/model/constructors/PDU')
const Service = require('../../../src/model/constructors/Service')

const testData = {
  org: require('../../data/info'),
  directorate: require('../../data/directorates/directorate-1/info'),
  pdu: require('../../data/directorates/directorate-1/pdus/d1-f1/info'),
  service: require('../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')
}

describe('Int: PDU -> Stats -> All', () => {
  it('should generate stats.services.all.total using getServices() method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
  })
  it('should generate stats.services.all.live using getServices({ status: "live" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.status = 'live'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
  })
  it('should generate stats.services.all.not_live using getServices({ status: "not-live" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.status = 'not-live'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(0, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(1, 'stats.services.all.not_live')
  })
  it('should generate stats.services.all.compliant using getServices({ risk: "compliant" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'compliant'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(1, 'stats.services.all.compliant')
  })
  it('should generate stats.services.all.not_compliant using getServices({ risk: "!compliant" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'medium'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
  })
  it('should generate stats.services.all.risk_very_high using getServices({ risk: "very-high" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
  })
  it('should generate stats.services.all.risk_high using getServices({ risk: "high" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'high'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(0, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(1, 'stats.services.all.risk_high')
  })
  it('should generate stats.services.all.risk_medium using getServices({ risk: "medium" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'medium'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(0, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(1, 'stats.services.all.risk_medium')
  })
  it('should generate stats.services.all.critical using getServices({ critical: "true" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    paramsService.critical = 'true'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(0, 'stats.services.all.risk_medium')
    expect(pdu.stats.services.all.critical).to.eql(1, 'stats.services.all.critical')
  })
  it('should generate stats.services.all.not_critical using getServices({ critical: "false" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    paramsService.critical = 'false'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(0, 'stats.services.all.risk_medium')
    expect(pdu.stats.services.all.critical).to.eql(0, 'stats.services.all.critical')
    expect(pdu.stats.services.all.not_critical).to.eql(1, 'stats.services.all.not_critical')
  })

  it('should generate stats.services.all.sunsetting using getServices({ sunsetting: "true" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    paramsService.sunsetting = 'true'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(0, 'stats.services.all.risk_medium')
    expect(pdu.stats.services.all.critical).to.eql(0, 'stats.services.all.critical')
    expect(pdu.stats.services.all.sunsetting).to.eql(1, 'stats.services.all.sunsetting')
  })
  it('should generate stats.services.all.not_sunsetting using getServices({ sunsetting: "false" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    paramsService.sunsetting = 'false'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(0, 'stats.services.all.risk_medium')
    expect(pdu.stats.services.all.critical).to.eql(0, 'stats.services.all.critical')
    expect(pdu.stats.services.all.sunsetting).to.eql(0, 'stats.services.all.sunsetting')
    expect(pdu.stats.services.all.not_sunsetting).to.eql(1, 'stats.services.all.not_sunsetting')
  })

  it('should generate stats.services.all.plans using getServices({ plans: "true" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    paramsService.plans = 'true'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(0, 'stats.services.all.risk_medium')
    expect(pdu.stats.services.all.critical).to.eql(0, 'stats.services.all.critical')
    expect(pdu.stats.services.all.sunsetting).to.eql(0, 'stats.services.all.sunsetting')
    expect(pdu.stats.services.all.plans).to.eql(1, 'stats.services.all.plans')
  })
  it('should generate stats.services.all.no_plans using getServices({ plans: "false" }) method', () => {
    const paramsPDU = cloneDeep(testData.pdu)
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.PDUID = pdu.id
    paramsService.risk = 'very-high'
    paramsService.plans = 'false'
    const service = new Service(paramsService)
    service.save()
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(pdu.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(pdu.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    expect(pdu.stats.services.all.risk_high).to.eql(0, 'stats.services.all.risk_high')
    expect(pdu.stats.services.all.risk_medium).to.eql(0, 'stats.services.all.risk_medium')
    expect(pdu.stats.services.all.critical).to.eql(0, 'stats.services.all.critical')
    expect(pdu.stats.services.all.sunsetting).to.eql(0, 'stats.services.all.sunsetting')
    expect(pdu.stats.services.all.plans).to.eql(0, 'stats.services.all.plans')
  })
})
