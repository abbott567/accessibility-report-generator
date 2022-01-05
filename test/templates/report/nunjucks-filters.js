/* global describe, it */

const cloneDeep = require('clone-deep')
const nunjucks = require('../../../src/templates/report/lib/nunjucks')
const { expect } = require('chai')

const Org = require('../../../src/model/constructors/Org')
const Directorate = require('../../../src/model/constructors/Directorate')
const PDU = require('../../../src/model/constructors/PDU')
const Service = require('../../../src/model/constructors/Service')

const testData = {
  org: require('../../data/info'),
  directorate: require('../../data/directorates/directorate-1/info'),
  pdu: require('../../data/directorates/directorate-1/pdus/d1-f1/info'),
  service: require('../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')
}

describe('Nunjucks: Filters', () => {
  it('should have a filter for x|isNaN', () => {
    const html = JSON.stringify('{{x|isNaN}}')
    const testResult = nunjucks.renderString(html, { x: 'potato' })
    const expectedResult = '"true"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for compliant|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'compliant' })
    const expectedResult = '"compliant"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for very-high|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'very-high' })
    const expectedResult = '"very high risk"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for medium|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'medium' })
    const expectedResult = '"medium risk"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for unknown|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'unknown' })
    const expectedResult = '"unknown risk"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for not-live|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'not-live' })
    const expectedResult = '"not live"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for not-done|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'not-done' })
    const expectedResult = '"not done"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for citizen|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'citizen' })
    const expectedResult = '"citizen facing"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for staff|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'staff' })
    const expectedResult = '"staff facing"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })
  it('should default to zero when true_compliance.all is NaN | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    pdu.stats.rates.true_compliance.total = 'potato'
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })
  it('should default to zero when true_compliance.citizen is NaN | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    pdu.stats.rates.true_compliance.citizen = 'potato'
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })
  it('should default to zero when true_compliance.staff is NaN | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    pdu.stats.rates.true_compliance.staff = 'potato'
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.stats.rate).to.equal(0)
  })

  it('should return x of y services are compliant total | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.text).to.equal('0 of 1 services are compliant')
  })

  it('should return x of y services are compliant citzen | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.type = 'citizen'
    service.save()
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.citizen.text).to.equal('0 of 1 services are compliant')
  })

  it('should return x of y services are compliant staff | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.type = 'staff'
    service.save()
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.staff.text).to.equal('0 of 1 services are compliant')
  })

  it('should return no services to make compliant if no services live | generateStatsSectionData', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.status = 'not-live'
    service.save()
    const html = '{{pdu|generateStatsSectionData|dump|safe}}'
    const renderResult = nunjucks.renderString(html, { pdu })
    const testResult = JSON.parse(renderResult, 10)
    expect(testResult.all.text).to.equal('No services to make compliant')
  })
})
