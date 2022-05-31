/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service methods -> isCompliant()', () => {
  it('should return true if compliant', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'compliant'
    const service = new Service(params)
    const expectedResult = true
    const actualResult = service.isCompliant()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return false not compliant', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'medium'
    const service = new Service(params)
    const expectedResult = false
    const actualResult = service.isCompliant()
    expect(actualResult).to.eql(expectedResult)
  })
})
