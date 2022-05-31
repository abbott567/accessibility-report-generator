/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> evidence.statement.status', () => {
  it('should throw an Error if params.evidence.statement.status is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.statement.status = undefined
    const expectedErrorMessage = `params.evidence.statement.status not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if params.evidence.statement.status is not valid', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.statement.status = 'potato'
    const expectedErrorMessage = `params.evidence.statement.status (potato) not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build if params.evidence.statement.status is "passed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.statement.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    expect(service.evidence.statement.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.statement.status is "not-done"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    expect(service.evidence.statement.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.statement.status is "failed"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.statement.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    expect(service.evidence.statement.status).to.equal(expectedResult)
  })
  it('should build if params.evidence.statement.status is "done"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 'done'
    expect(service.evidence.statement.status).to.equal(expectedResult)
  })
})
