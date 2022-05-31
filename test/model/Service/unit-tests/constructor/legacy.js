/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.legacy', () => {
  it('should construct with a legacy value of true if provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.legacy = 'true'
    params.plans = 'false'
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.legacy).to.equal(expectedResult)
  })
  it('should construct with a legacy value of false if provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.legacy = 'false'
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.legacy).to.equal(expectedResult)
  })
  it('should throw an error if no legacy value is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.legacy = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
  it('should throw an error if params.legacy is not true or false', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.legacy = 'string'
    const expectedErrorMessage = `params.legacy not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an error if params.legacy is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.legacy = undefined
    const expectedErrorMessage = `params.legacy not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an error if params.legacy is true and params.plans is true', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.legacy = 'true'
    params.plans = 'true'
    const expectedErrorMessage = `Legacy services should not be considered legacy if they can be made compliant: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
