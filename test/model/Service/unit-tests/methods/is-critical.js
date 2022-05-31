/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service methods -> isCritical()', () => {
  it('should return true if critical', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.critical = 'true'
    const service = new Service(params)
    const expectedResult = true
    const actualResult = service.isCritical()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return false not critical', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.critical = 'false'
    const service = new Service(params)
    const expectedResult = false
    const actualResult = service.isCritical()
    expect(actualResult).to.eql(expectedResult)
  })
})
