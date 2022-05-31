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

describe('Int: Directorate -> Stats -> Rates', () => {
  it('should generate stats.rates.true.total as a percentage', () => {
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
    serviceParams.evidence = {
      wcag: { status: 'passed', date: 'unknown' },
      screen_reader: { status: 'passed', date: 'unknown' },
      screen_magnifier: { status: 'passed', date: 'unknown' },
      voice_controller: { status: 'passed', date: 'unknown' },
      statement: { status: 'passed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.rates.true_compliance.total).to.eql(100, 'stats.rates.true.total')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.rates.true.citizen as a percentage', () => {
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
    serviceParams.type = 'citizen'
    serviceParams.evidence = {
      wcag: { status: 'passed', date: 'unknown' },
      screen_reader: { status: 'passed', date: 'unknown' },
      screen_magnifier: { status: 'passed', date: 'unknown' },
      voice_controller: { status: 'passed', date: 'unknown' },
      statement: { status: 'passed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.rates.true_compliance.citizen).to.eql(100, 'stats.rates.true.citizen')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.rates.true.staff as a percentage', () => {
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
    serviceParams.evidence = {
      wcag: { status: 'passed', date: 'unknown' },
      screen_reader: { status: 'passed', date: 'unknown' },
      screen_magnifier: { status: 'passed', date: 'unknown' },
      voice_controller: { status: 'passed', date: 'unknown' },
      statement: { status: 'passed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service = new Service(serviceParams)
    service.save()
    // Test
    expect(directorate.stats.rates.true_compliance.staff).to.eql(100, 'stats.rates.true.staff')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })

  it('should generate stats.rates.adjusted.all as a percentage', () => {
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
    serviceParams.name = 'Service 1'
    serviceParams.evidence = {
      wcag: { status: 'passed', date: 'unknown' },
      screen_reader: { status: 'passed', date: 'unknown' },
      screen_magnifier: { status: 'passed', date: 'unknown' },
      voice_controller: { status: 'passed', date: 'unknown' },
      statement: { status: 'passed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 2'
    serviceParams.plans = 'false'
    serviceParams.evidence = {
      wcag: { status: 'failed', date: 'unknown' },
      screen_reader: { status: 'failed', date: 'unknown' },
      screen_magnifier: { status: 'failed', date: 'unknown' },
      voice_controller: { status: 'failed', date: 'unknown' },
      statement: { status: 'failed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    expect(directorate.stats.rates.adjusted_compliance.total).to.eql(100, 'stats.rates.adjusted.total')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.rates.adjusted.citizen as a percentage', () => {
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
    serviceParams.name = 'Service 1'
    serviceParams.type = 'citizen'
    serviceParams.evidence = {
      wcag: { status: 'passed', date: 'unknown' },
      screen_reader: { status: 'passed', date: 'unknown' },
      screen_magnifier: { status: 'passed', date: 'unknown' },
      voice_controller: { status: 'passed', date: 'unknown' },
      statement: { status: 'passed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 2'
    serviceParams.type = 'staff'
    serviceParams.evidence = {
      wcag: { status: 'failed', date: 'unknown' },
      screen_reader: { status: 'failed', date: 'unknown' },
      screen_magnifier: { status: 'failed', date: 'unknown' },
      voice_controller: { status: 'failed', date: 'unknown' },
      statement: { status: 'failed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    expect(directorate.stats.rates.adjusted_compliance.citizen).to.eql(100, 'stats.rates.adjusted.citizen')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
  it('should generate stats.rates.adjusted.staff as a percentage', () => {
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
    serviceParams.name = 'Service 1'
    serviceParams.type = 'staff'
    serviceParams.evidence = {
      wcag: { status: 'passed', date: 'unknown' },
      screen_reader: { status: 'passed', date: 'unknown' },
      screen_magnifier: { status: 'passed', date: 'unknown' },
      voice_controller: { status: 'passed', date: 'unknown' },
      statement: { status: 'passed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service1 = new Service(serviceParams)
    service1.save()
    // Set up Service 2
    serviceParams = cloneDeep(testService)
    serviceParams.name = 'Service 2'
    serviceParams.type = 'citizen'
    serviceParams.evidence = {
      wcag: { status: 'failed', date: 'unknown' },
      screen_reader: { status: 'failed', date: 'unknown' },
      screen_magnifier: { status: 'failed', date: 'unknown' },
      voice_controller: { status: 'failed', date: 'unknown' },
      statement: { status: 'failed', date: 'unknown' }
    }
    serviceParams.orgID = org.id
    serviceParams.directorateID = directorate.id
    serviceParams.PDUID = pdu.id
    const service2 = new Service(serviceParams)
    service2.save()
    // Test
    expect(directorate.stats.rates.adjusted_compliance.staff).to.eql(100, 'stats.rates.adjusted.staff')
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
