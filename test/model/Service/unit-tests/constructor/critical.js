/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.critical', () => {
  it('should throw an error if params.critical is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.critical = undefined
    const expectedErrorMessage = `params.critical not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an error if params.critical is not true or false', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.critical = 'string'
    const expectedErrorMessage = `params.critical not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })

  it('should construct with a critical value of true if provided', () => {
    const params = cloneDeep(testData)
    params.critical = 'true'
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.critical).to.equal(expectedResult)
  })
  it('should construct with a critical value of false if provided', () => {
    const params = cloneDeep(testData)
    params.critical = 'false'
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.critical).to.equal(expectedResult)
  })
  it('should throw an error if no critical value is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.critical = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
})
