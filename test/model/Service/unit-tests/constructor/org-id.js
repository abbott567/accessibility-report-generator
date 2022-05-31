/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.orgID', () => {
  it('should throw an Error if no orgID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = undefined
    const expectedErrorMessage = `params.orgID not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
