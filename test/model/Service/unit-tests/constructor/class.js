/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.class', () => {
  it('should have a class of "Service"', () => {
    const params = cloneDeep(testData)
    params.alias = 'TS'
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    const service = new Service(params)
    const expectedResult = 'Service'
    expect(service.class).to.equal(expectedResult)
  })
})
