/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testPDU = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))
const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testService = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Int: Directorate -> Stats -> All', () => {
  it('should generate stats.services.all.total using getServices() method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.total).to.eql(1, 'stats.services.all.total')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.live using getServices({ status: "live" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.live).to.eql(1, 'stats.services.all.live')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.not_live using getServices({ status: "not-live" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.status = 'not-live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.not_live).to.eql(1, 'stats.services.all.not_live')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.compliant using getServices({ risk: "compliant" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'compliant'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.compliant).to.eql(1, 'stats.services.all.compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.live_compliant using getServices({ risk: "compliant", status: "live" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'compliant'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.live_compliant).to.eql(1, 'stats.services.all.live_compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.not_compliant using getServices({ risk: "!compliant" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'medium'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.not_compliant).to.eql(1, 'stats.services.all.not_compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.live_not_compliant using getServices({ status: "live", risk: "!compliant" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'medium'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.live_not_compliant).to.eql(1, 'stats.services.all.live_not_compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.risk_very_high using getServices({ risk: "very-high" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'very-high'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.risk_very_high).to.eql(1, 'stats.services.all.risk_very_high')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.risk_high using getServices({ risk: "high" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'high'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.risk_high).to.eql(1, 'stats.services.all.risk_high')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.risk_medium using getServices({ risk: "medium" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'medium'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.risk_medium).to.eql(1, 'stats.services.all.risk_medium')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.risk_low using getServices({ risk: "low" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'low'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.risk_low).to.eql(1, 'stats.services.all.risk_medium')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.risk_unknown using getServices({ risk: "unknown" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.risk = 'unknown'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.risk_unknown).to.eql(1, 'stats.services.all.risk_unknown')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.critical using getServices({ critical: "true" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.critical = 'true'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.critical).to.eql(1, 'stats.services.all.critical')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.not_critical using getServices({ critical: "false" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.critical = 'false'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.not_critical).to.eql(1, 'stats.services.all.not_critical')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.services.all.sunsetting using getServices({ sunsetting: "true" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.sunsetting = 'true'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.sunsetting).to.eql(1, 'stats.services.all.sunsetting')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.not_sunsetting using getServices({ sunsetting: "false" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.sunsetting = 'false'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.not_sunsetting).to.eql(1, 'stats.services.all.not_sunsetting')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.services.all.plans using getServices({ plans: "true" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.plans = 'true'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.plans).to.eql(1, 'stats.services.all.plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.no_plans using getServices({ plans: "false" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.plans = 'false'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.no_plans).to.eql(1, 'stats.services.all.no_plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.live_no_plans using getServices({ status: "live", plans: "false" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.status = 'live'
    serviceParams.plans = 'false'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.live_no_plans).to.eql(1, 'stats.services.all.live_no_plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.all.legacy using getServices({ legacy: "true" }) method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.legacy = 'true'
    serviceParams.plans = 'false'
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(pdu.stats.services.all.no_plans).to.eql(1, 'stats.services.all.no_plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
