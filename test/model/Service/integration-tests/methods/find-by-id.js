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

describe('Int: Service methods -> Service.findByID()', () => {
  it('should return a service by using the provided ID', () => {
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
    serviceParams.name = 'Test service'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    const expectedResult = 'test-service'
    const foundService = Service.findByID(service.id)
    expect(foundService.slug).to.equal(expectedResult)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should throw an error if it cannot find any services with the provided ID', () => {
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
    serviceParams.name = 'Test service'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    const testID = 76373637
    expect(() => { Service.findByID(testID) }).to.throw(`Couldnt find a Service with the ID: ${testID}`)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
