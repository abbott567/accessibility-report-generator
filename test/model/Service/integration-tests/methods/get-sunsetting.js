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

describe('Int: Service methods -> getSunsetting()', () => {
  it('should return all sunsetting services', () => {
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
    serviceParams.sunsetting = 'true'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.sunsetting = 'false'
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    const filteredServices = Service.getSunsetting()
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
