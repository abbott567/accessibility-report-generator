/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.sunsetting', () => {
  it('should throw an error if params.sunsetting is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = undefined
    const expectedErrorMessage = `params.sunsetting not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an error if params.sunsetting is not true or false', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = 'string'
    const expectedErrorMessage = `params.sunsetting not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should construct with a sunsetting value of true if provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = 'true'
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.sunsetting).to.equal(expectedResult)
  })
  it('should construct with a sunsetting value of false if provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = 'false'
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.sunsetting).to.equal(expectedResult)
  })
  it('should throw an error if no sunsetting value is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
  it('should construct with a sunsetting date if a date is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = 'true'
    params.sunsetDate = 'May 2022'
    const service = new Service(params)
    const expectedResult = 'May 2022'
    expect(service.sunsetDate).to.equal(expectedResult)
  })
  it('should construct with a sunsetting date of unknown if sunsetting is true and no date is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = 'true'
    params.sunsetDate = undefined
    const service = new Service(params)
    const expectedResult = 'unknown'
    expect(service.sunsetDate).to.equal(expectedResult)
  })
  it('should construct with a sunsetting date of n/a if sunsetting is false and no date is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.sunsetting = 'false'
    params.sunsetDate = undefined
    const service = new Service(params)
    const expectedResult = 'n/a'
    expect(service.sunsetDate).to.equal(expectedResult)
  })
})
