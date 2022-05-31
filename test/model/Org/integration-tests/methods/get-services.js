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

describe('Int: Org methods -> Org.getServices()', () => {
  it('should return an array of Services it has using the getServices() method', () => {
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
    const actualResult = org.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should return an empty array using the getServices() method if there are no Services belonging to the Org', () => {
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
    // Test
    const expectedResult = []
    const actualResult = org.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should return only results which belong to the Org using the getServices() method if there are more than 1', () => {
    // Set up Org 1
    let orgParams = cloneDeep(testOrg)
    orgParams.name = 'Org 1'
    const org1 = new Org(orgParams)
    org1.save()
    // Set up Org 2
    orgParams = cloneDeep(testOrg)
    orgParams.name = 'Org 2'
    const org2 = new Org(orgParams)
    org2.save()
    // Set up Directorate 1
    let directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Directorate 1'
    directorateParams.orgID = org1.id
    const directorate1 = new Directorate(directorateParams)
    directorate1.save()
    // Set up Directorate 2
    directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Directorate 2'
    directorateParams.orgID = org2.id
    const directorate2 = new Directorate(directorateParams)
    directorate2.save()
    // Set up PDU 1
    let pduParams = cloneDeep(testPDU)
    pduParams.name = 'PDU 1'
    pduParams.orgID = org1.id
    pduParams.directorateID = directorate1.id
    const pdu1 = new PDU(pduParams)
    pdu1.save()
    // Set up PDU 2
    pduParams = cloneDeep(testPDU)
    pduParams.name = 'PDU 2'
    pduParams.orgID = org2.id
    pduParams.directorateID = directorate2.id
    const pdu2 = new PDU(pduParams)
    pdu2.save()
    // Set up Service 1
    let serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 1'
    serviceParams.orgID = org1.id
    serviceParams.directorateID = directorate1.id
    serviceParams.PDUID = pdu1.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 2'
    serviceParams.orgID = org2.id
    serviceParams.directorateID = directorate2.id
    serviceParams.PDUID = pdu2.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    const expectedResult = [service1]
    const actualResult = org1.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
