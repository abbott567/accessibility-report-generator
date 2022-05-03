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

describe('Int: Directorate -> Stats -> Staff', () => {
  it('should generate stats.services.staff.total using getServices({ type: "staff" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.risk = 'medium'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.staff.all.')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
  })
  it('should generate stats.services.staff.live using getServices({ type: "staff", status: "live" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.status = 'live'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.total')
  })
  it('should generate stats.services.staff.live using getServices({ type: "staff", status: "not-live" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.status = 'not-live'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(0, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(1, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(0, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(1, 'stats.services.staff.not_live')
  })
  it('should generate stats.services.staff.complaint using getServices({ type: "staff", risk: "compliant" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.risk = 'compliant'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(1, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(0, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(1, 'stats.services.staff.compliant')
  })
  it('should generate stats.services.staff.not_compliant using getServices({ type: "staff", risk: "medium" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.risk = 'medium'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
  })
  it('should generate stats.services.staff.risk_very_high using getServices({ type: "staff", risk: "very-high" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.risk = 'very-high'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(1, 'stats.services.staff.risk_very_high')
  })
  it('should generate stats.services.staff.risk_high using getServices({ type: "staff", risk: "high" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.risk = 'high'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(0, 'stats.services.staff.risk_very_high')
    expect(directorate.stats.services.staff.risk_high).to.eql(1, 'stats.services.staff.risk_high')
  })
  it('should generate stats.services.staff.risk_medium using getServices({ type: "staff", risk: "medium" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.risk = 'medium'
    paramsService.evidence.wcag.status = 'failed'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(0, 'stats.services.staff.risk_very_high')
    expect(directorate.stats.services.staff.risk_high).to.eql(0, 'stats.services.staff.risk_high')
    expect(directorate.stats.services.staff.risk_medium).to.eql(1, 'stats.services.staff.risk_medium')
  })

  it('should generate stats.services.staff.critical using getServices({ type: "staff", critical: "true" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.critical = 'true'
    paramsService.risk = 'very-high'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(1, 'stats.services.staff.risk_very_high')
    expect(directorate.stats.services.staff.risk_high).to.eql(0, 'stats.services.staff.risk_high')
    expect(directorate.stats.services.staff.risk_medium).to.eql(0, 'stats.services.staff.risk_medium')
    expect(directorate.stats.services.staff.critical).to.eql(1, 'stats.services.staff.critical')
  })
  it('should generate stats.services.staff.not_critical using getServices({ type: "staff", critical: "false" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.critical = 'false'
    paramsService.risk = 'very-high'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(1, 'stats.services.staff.risk_very_high')
    expect(directorate.stats.services.staff.risk_high).to.eql(0, 'stats.services.staff.risk_high')
    expect(directorate.stats.services.staff.risk_medium).to.eql(0, 'stats.services.staff.risk_medium')
    expect(directorate.stats.services.staff.critical).to.eql(0, 'stats.services.staff.critical')
    expect(directorate.stats.services.staff.not_critical).to.eql(1, 'stats.services.staff.not_critical')
  })

  it('should generate stats.services.staff.sunsetting using getServices({ type: "staff", sunsetting: "true" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.sunsetting = 'true'
    paramsService.risk = 'very-high'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(1, 'stats.services.staff.risk_very_high')
    expect(directorate.stats.services.staff.risk_high).to.eql(0, 'stats.services.staff.risk_high')
    expect(directorate.stats.services.staff.risk_medium).to.eql(0, 'stats.services.staff.risk_medium')
    expect(directorate.stats.services.staff.critical).to.eql(0, 'stats.services.staff.critical')
    expect(directorate.stats.services.staff.sunsetting).to.eql(1, 'stats.services.staff.sunsetting')
  })
  it('should generate stats.services.staff.not_sunsetting using getServices({ type: "staff", sunsetting: "false" }) method', () => {
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
    paramsService.type = 'staff'
    paramsService.sunsetting = 'false'
    paramsService.risk = 'very-high'
    const service = new Service(paramsService)
    service.save()
    expect(directorate.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    expect(directorate.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    expect(directorate.stats.services.all.not_live).to.eql(0, 'stats.services.all.not_live')
    expect(directorate.stats.services.all.compliant).to.eql(0, 'stats.services.all.compliant')
    expect(directorate.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    expect(directorate.stats.services.citizen.total).to.eql(0, 'stats.services.citizen.total')
    expect(directorate.stats.services.citizen.live).to.eql(0, 'stats.services.citizen.live')
    expect(directorate.stats.services.citizen.not_live).to.eql(0, 'stats.services.citizen.not_live')
    expect(directorate.stats.services.citizen.compliant).to.eql(0, 'stats.services.citizen.compliant')
    expect(directorate.stats.services.citizen.not_compliant).to.eql(0, 'stats.services.citizen.not_compliant')
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    expect(directorate.stats.services.staff.not_live).to.eql(0, 'stats.services.staff.not_live')
    expect(directorate.stats.services.staff.compliant).to.eql(0, 'stats.services.staff.compliant')
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    expect(directorate.stats.services.staff.risk_very_high).to.eql(1, 'stats.services.staff.risk_very_high')
    expect(directorate.stats.services.staff.risk_high).to.eql(0, 'stats.services.staff.risk_high')
    expect(directorate.stats.services.staff.risk_medium).to.eql(0, 'stats.services.staff.risk_medium')
    expect(directorate.stats.services.staff.critical).to.eql(0, 'stats.services.staff.critical')
    expect(directorate.stats.services.staff.sunsetting).to.eql(0, 'stats.services.staff.sunsetting')
    expect(directorate.stats.services.staff.not_sunsetting).to.eql(1, 'stats.services.staff.not_sunsetting')
  })
})
