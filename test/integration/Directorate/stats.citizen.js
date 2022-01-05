/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Directorate = require('../../../src/model/constructors/Directorate')
const PDU = require('../../../src/model/constructors/PDU')
const Service = require('../../../src/model/constructors/Service')

const testData = {
  org: require('../../data/info'),
  directorate: require('../../data/directorates/directorate-1/info'),
  pdu: require('../../data/directorates/directorate-1/pdus/d1-f1/info'),
  service: require('../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')
}

describe('Int: Directorate -> Stats -> Citizen', () => {
  it('should generate stats.services.citizen.total using getServices({ type: "citizen" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.risk = 'medium'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
  })
  it('should generate stats.services.citizen.live using getServices({ type: "citizen", status: "live" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.status = 'live'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
  })
  it('should generate stats.services.citizen.not_live using getServices({ type: "citizen", status: "not-live" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.status = 'not-live'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(0, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(1, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(1, 'stats.services.citizen.not_live')
  })
  it('should generate stats.services.citizen.complaint using getServices({ type: "citizen", risk: "compliant" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.risk = 'compliant'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(1, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(0, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(1, 'stats.services.citizen.compliant')
  })
  it('should generate stats.services.citizen.not_complaint using getServices({ type: "citizen", risk: "medium" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.risk = 'medium'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
  })
  it('should generate stats.services.citizen.risk_very_high using getServices({ type: "citizen", risk: "very-high" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.risk = 'very-high'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
  })
  it('should generate stats.services.citizen.risk_high using getServices({ type: "citizen", risk: "high" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.risk = 'high'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(0, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(1, 'stats.services.citizen.risk_high')
  })

  it('should generate stats.services.citizen.risk_medium using getServices({ type: "citizen", risk: "medium" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.risk = 'medium'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(0, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(1, 'stats.services.citizen.risk_medium')
  })

  it('should generate stats.services.citizen.critical using getServices({ type: "citizen", critical: "true" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.critical = 'true'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(0, 'stats.services.citizen.risk_medium')
    expect(directorate.stats.services.citizen.critical).to.eql(1, 'stats.services.citizen.critical')
  })
  it('should generate stats.services.citizen.not_critical using getServices({ type: "citizen", critical: "false" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.critical = 'false'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(0, 'stats.services.citizen.risk_medium')
    expect(directorate.stats.services.citizen.critical).to.eql(0, 'stats.services.citizen.critical')
    expect(directorate.stats.services.citizen.not_critical).to.eql(1, 'stats.services.citizen.not_critical')
  })

  it('should generate stats.services.citizen.sunsetting using getServices({ type: "citizen", sunsetting: "true" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.sunsetting = 'true'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(0, 'stats.services.citizen.risk_medium')
    expect(directorate.stats.services.citizen.critical).to.eql(0, 'stats.services.citizen.critical')
    expect(directorate.stats.services.citizen.sunsetting).to.eql(1, 'stats.services.citizen.sunsetting')
  })
  it('should generate stats.services.citizen.not_sunsetting using getServices({ type: "citizen", sunsetting: "false" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.sunsetting = 'false'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(0, 'stats.services.citizen.risk_medium')
    expect(directorate.stats.services.citizen.critical).to.eql(0, 'stats.services.citizen.critical')
    expect(directorate.stats.services.citizen.sunsetting).to.eql(0, 'stats.services.citizen.sunsetting')
    expect(directorate.stats.services.citizen.not_sunsetting).to.eql(1, 'stats.services.citizen.not_sunsetting')
  })

  it('should generate stats.services.citizen.plans using getServices({ type: "citizen", plans: "true" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.plans = 'true'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(0, 'stats.services.citizen.risk_medium')
    expect(directorate.stats.services.citizen.critical).to.eql(0, 'stats.services.citizen.critical')
    expect(directorate.stats.services.citizen.sunsetting).to.eql(0, 'stats.services.citizen.sunsetting')
    expect(directorate.stats.services.citizen.plans).to.eql(1, 'stats.services.citizen.plans')
  })
  it('should generate stats.services.citizen.no_plans using getServices({ type: "citizen", plans: "false" }) method', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService = cloneDeep(testData.service)
    paramsService.directorateID = directorate.id
    paramsService.PDUID = pdu.id
    paramsService.type = 'citizen'
    paramsService.plans = 'false'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(1, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(1, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(1, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.citizen.risk_very_high).to.eql(1, 'stats.services.citizen.risk_very_high')
    expect(directorate.stats.services.citizen.risk_high).to.eql(0, 'stats.services.citizen.risk_high')
    expect(directorate.stats.services.citizen.risk_medium).to.eql(0, 'stats.services.citizen.risk_medium')
    expect(directorate.stats.services.citizen.critical).to.eql(0, 'stats.services.citizen.critical')
    expect(directorate.stats.services.citizen.sunsetting).to.eql(0, 'stats.services.citizen.sunsetting')
    expect(directorate.stats.services.citizen.not_sunsetting).to.eql(1, 'stats.services.citizen.not_sunsetting')
    expect(directorate.stats.services.citizen.no_plans).to.eql(1, 'stats.services.citizen.no_plans')
  })
})
