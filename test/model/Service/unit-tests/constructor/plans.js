/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.plans', () => {
  it('should construct with a plans value of true if provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.plans = 'true'
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.plans).to.equal(expectedResult)
  })
  it('should construct with a plans value of false if provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.plans = 'false'
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.plans).to.equal(expectedResult)
  })
  it('should throw an error if no plans value is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.plans = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
  it('should throw an error if params.plans is not true or false', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.plans = 'string'
    const expectedErrorMessage = `params.plans not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an error if params.plans is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.plans = undefined
    const expectedErrorMessage = `params.plans not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
