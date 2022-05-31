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

describe('Int: Directorate -> Stats -> Staff', () => {
  it('should generate stats.services.staff.total using getServices({ type: "staff" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.total).to.eql(1, 'stats.services.staff.total')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.live using getServices({ type: "staff", status: "live" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.live).to.eql(1, 'stats.services.staff.live')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.not_live using getServices({ type: "staff", status: "not-live" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.status = 'not-live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.not_live).to.eql(1, 'stats.services.staff.not_live')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.complaint using getServices({ type: "staff", risk: "compliant" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'compliant'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.compliant).to.eql(1, 'stats.services.staff.compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.live_complaint using getServices({ type: "staff", risk: "compliant", status: "live" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'compliant'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.live_compliant).to.eql(1, 'stats.services.staff.live_compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.not_complaint using getServices({ type: "staff", risk: "medium" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'medium'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.not_compliant).to.eql(1, 'stats.services.staff.not_compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.live_not_complaint using getServices({ type: "staff", risk: "medium", status: "live" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'medium'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.live_not_compliant).to.eql(1, 'stats.services.staff.live_not_compliant')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.risk_very_high using getServices({ type: "staff", risk: "very-high" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'very-high'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.risk_very_high).to.eql(1, 'stats.services.staff.risk_very_high')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.risk_high using getServices({ type: "staff", risk: "high" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'high'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.risk_high).to.eql(1, 'stats.services.staff.risk_high')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.services.staff.risk_medium using getServices({ type: "staff", risk: "medium" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'medium'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.risk_medium).to.eql(1, 'stats.services.staff.risk_medium')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.risk_low using getServices({ type: "staff", risk: "low" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'low'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.risk_low).to.eql(1, 'stats.services.staff.risk_low')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.risk_unknown using getServices({ type: "staff", risk: "unknown" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.risk = 'unknown'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.risk_unknown).to.eql(1, 'stats.services.staff.risk_unknown')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.services.staff.critical using getServices({ type: "staff", critical: "true" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.critical = 'true'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.critical).to.eql(1, 'stats.services.staff.critical')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.not_critical using getServices({ type: "staff", critical: "false" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.critical = 'false'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.not_critical).to.eql(1, 'stats.services.staff.not_critical')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.services.staff.sunsetting using getServices({ type: "staff", sunsetting: "true" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.sunsetting = 'true'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.sunsetting).to.eql(1, 'stats.services.staff.sunsetting')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.not_sunsetting using getServices({ type: "staff", sunsetting: "false" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.sunsetting = 'false'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.not_sunsetting).to.eql(1, 'stats.services.staff.not_sunsetting')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.services.staff.plans using getServices({ type: "staff", plans: "true" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.plans = 'true'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.plans).to.eql(1, 'stats.services.staff.plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.no_plans using getServices({ type: "staff", plans: "false" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.plans = 'false'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.no_plans).to.eql(1, 'stats.services.staff.no_plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.live_no_plans using getServices({ type: "staff", plans: "false", status: "live" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.plans = 'false'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.live_no_plans).to.eql(1, 'stats.services.staff.live_no_plans')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.services.staff.legacy using getServices({ type: "staff", plans: "legacy" }) method', () => {
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
    serviceParams.type = 'staff'
    serviceParams.plans = 'false'
    serviceParams.legacy = 'true'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.services.staff.legacy).to.eql(1, 'stats.services.staff.legacy')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
