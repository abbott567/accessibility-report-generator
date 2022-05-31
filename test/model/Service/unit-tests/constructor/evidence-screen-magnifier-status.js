/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.evidence.screen_magnifier.status', () => {
  it('should throw an Error if params.evidence.screen_magnifier.status is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = undefined
    const expectedErrorMessage = `params.evidence.screen_magnifier.status not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if params.evidence.screen_magnifier.status is not valid', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'potato'
    const expectedErrorMessage = `params.evidence.screen_magnifier.status (potato) not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build if params.evidence.screen_magnifier.status is "passed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "PASSED"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'PASSED'
    const service = new Service(params)
    const expectedResult = 'passed'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "PaSSed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'PaSSed'
    const service = new Service(params)
    const expectedResult = 'passed'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "not-done"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "not done"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'not done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "NOT-DONE"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'NOT-DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "NOT DONE"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'NOT DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "NoT DonE"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'NoT DonE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "failed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "FAILED"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'FAILED'
    const service = new Service(params)
    const expectedResult = 'failed'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "FaIlEd"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'FaIlEd'
    const service = new Service(params)
    const expectedResult = 'failed'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "basic"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'basic'
    const service = new Service(params)
    const expectedResult = 'basic'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "BASIC"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'BASIC'
    const service = new Service(params)
    const expectedResult = 'basic'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_magnifier.status is "BaSiC"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_magnifier.status = 'BaSiC'
    const service = new Service(params)
    const expectedResult = 'basic'
    expect(service.evidence.screen_magnifier.status).to.equal(expectedResult)
  })
})
