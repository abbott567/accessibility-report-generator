/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> evidence.wcag.date', () => {
  it('should throw an Error if params.evidence.wcag.date is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = undefined
    const expectedErrorMessage = `params.evidence.wcag.date not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })

  it('should throw an Error if params.evidence.wcag.date is invalid', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = 'potato'
    const expectedErrorMessage = `Date not valid when constructing service: ${params.name} - potato`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })

  it('should build if params.evidence.wcag.date is valid in MMMM yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = 'January 2022'
    const service = new Service(params)
    const expectedResult = 'January 2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in MMMM yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = 'January 22'
    const service = new Service(params)
    const expectedResult = 'January 22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in d MMMM yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '2 January 2022'
    const service = new Service(params)
    const expectedResult = '2 January 2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in d MMMM yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '2 January 22'
    const service = new Service(params)
    const expectedResult = '2 January 22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in dd MMMM yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '02 January 2022'
    const service = new Service(params)
    const expectedResult = '02 January 2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in dd MMMM yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '02 January 22'
    const service = new Service(params)
    const expectedResult = '02 January 22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in mm/yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '01/2022'
    const service = new Service(params)
    const expectedResult = '01/2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in mm/yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '01/22'
    const service = new Service(params)
    const expectedResult = '01/22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in d/mm/yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '2/01/2022'
    const service = new Service(params)
    const expectedResult = '2/01/2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in d/mm/yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '2/01/22'
    const service = new Service(params)
    const expectedResult = '2/01/22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in dd/mm/yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '02/01/2022'
    const service = new Service(params)
    const expectedResult = '02/01/2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in dd/mm/yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '02/01/22'
    const service = new Service(params)
    const expectedResult = '02/01/22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })

  it('should build if params.evidence.wcag.date is valid in mm-yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '01-2022'
    const service = new Service(params)
    const expectedResult = '01-2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in mm-yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '01-22'
    const service = new Service(params)
    const expectedResult = '01-22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in d-mm-yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '2-01-2022'
    const service = new Service(params)
    const expectedResult = '2-01-2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in d-mm-yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '2-01-22'
    const service = new Service(params)
    const expectedResult = '2-01-22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in dd-mm-yyyy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '02-01-2022'
    const service = new Service(params)
    const expectedResult = '02-01-2022'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
  it('should build if params.evidence.wcag.date is valid in dd-mm-yy format', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = '02-01-22'
    const service = new Service(params)
    const expectedResult = '02-01-22'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })

  it('should build if params.evidence.wcag.date is "unknown"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = 'unknown'
    const service = new Service(params)
    const expectedResult = 'unknown'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })

  it('should build if params.evidence.wcag.date is "n/a', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.date = 'n/a'
    const service = new Service(params)
    const expectedResult = 'n/a'
    expect(service.evidence.wcag.date).to.equal(expectedResult)
  })
})
