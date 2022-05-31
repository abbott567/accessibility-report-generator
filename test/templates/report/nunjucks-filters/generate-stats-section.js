/* global describe, it */

const path = require('path')
const cloneDeep = require('clone-deep')
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const { expect } = require('chai')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))

const testData = {
  org: require(path.resolve('test', 'dummy-data', 'info')),
  directorate: require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info')),
  pdu: require(path.resolve('test', 'dummy-data', 'directorates/directorate-1', 'pdus/d1-f1/info')),
  service: require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1/info'))
}

describe('Nunjucks: Filters -> |generateStatsSectionData', () => {
  it('should have a filter for params|generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })
  it('should default to zero when true_compliance.all is NaN | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    pdu.stats.rates.true_compliance.total = 'potato'
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })
  it('should default to zero when true_compliance.citizen is NaN | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    pdu.stats.rates.true_compliance.citizen = 'potato'
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })
  it('should default to zero when true_compliance.staff is NaN | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    pdu.stats.rates.true_compliance.staff = 'potato'
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })

  it('should return x of y services are compliant total | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.text).to.equal('0 of 1 services are compliant')
  })

  it('should return x of y services are compliant citzen | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.citizen.text).to.equal('0 of 1 services are compliant')
  })

  it('should return x of y services are compliant staff | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.type = 'staff'
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.staff.text).to.equal('0 of 1 services are compliant')
  })

  it('should return no services to make compliant if no services live | generateStatsSectionData', () => {
    // Set up Org
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Set up Service
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    serParams.status = 'not-live'
    serParams.directorateID = directorate.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    // Test
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.text).to.equal('No services to make compliant')
  })
})
