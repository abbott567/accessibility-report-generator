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

describe('Int: PDU methods -> pdu.getDirectorate()', () => {
  it('should return an array of services it has using the getServices() method', () => {
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
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    const expectedResult = [service]
    const actualResult = pdu.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
  })

  it('should return an empty array using the getServices() method if there are no services belonging to the PDU', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU 1
    let pduParams = cloneDeep(testPDU)
    pduParams.name = 'PDU 1'
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu1 = new PDU(pduParams)
    pdu1.save()
    // Set up PDU 2
    pduParams = cloneDeep(testPDU)
    pduParams.name = 'PDU 1'
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu2 = new PDU(pduParams)
    pdu2.save()
    // Set up Service 1
    let serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu2.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 2'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu2.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    const expectedResult = []
    const actualResult = pdu1.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
  })

  it('should return live, compliant, citizen facing services using pdu.getServices({ status: live, risk: compliant, type: citizen)', () => {
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
    // Set up Service 1
    let serviceParams = cloneDeep(testService)
    serviceParams.type = 'citizen'
    serviceParams.risk = 'compliant'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.type = 'staff'
    serviceParams.risk = 'high'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    const filteredServices = pdu.getServices({ status: 'live', risk: 'compliant', type: 'citizen' })
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should return citizen facing services, with plans, which are live using pdu.getServices({ type: citizen, plans: true, status: live)', () => {
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
    // Set up Service 1
    let serviceParams = cloneDeep(testService)
    serviceParams.type = 'citizen'
    serviceParams.plans = 'true'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.type = 'staff'
    serviceParams.plans = 'false'
    serviceParams.status = 'live'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    const filteredServices = pdu.getServices({ type: 'citizen', plans: 'true', status: 'live' })
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
