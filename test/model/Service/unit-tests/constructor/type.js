/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.type', () => {
  it('should construct with a passed in type of citizen', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    const service = new Service(params)
    const expectedResult = 'citizen'
    expect(service.type).to.equal(expectedResult)
  })
  it('should construct with a passed in type of staff', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.type = 'staff'
    const service = new Service(params)
    const expectedResult = 'staff'
    expect(service.type).to.equal(expectedResult)
  })
  it('should throw an Error if no type provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.type = undefined
    const expectedErrorMessage = `params.type not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
