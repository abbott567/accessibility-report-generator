/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> evidence.screen_reader.status', () => {
  it('should throw an Error if params.evidence.screen_reader.status is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_reader.status = undefined
    const expectedErrorMessage = `params.evidence.screen_reader.status not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if params.evidence.screen_reader.status is not valid', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_reader.status = 'potato'
    const expectedErrorMessage = `params.evidence.screen_reader.status (potato) not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build if params.evidence.screen_reader.status is "passed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_reader.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    expect(service.evidence.screen_reader.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_reader.status is "not-done"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_reader.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.screen_reader.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_reader.status is "failed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_reader.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    expect(service.evidence.screen_reader.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.screen_reader.status is "basic"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.screen_reader.status = 'basic'
    const service = new Service(params)
    const expectedResult = 'basic'
    expect(service.evidence.screen_reader.status).to.equal(expectedResult)
  })
})
