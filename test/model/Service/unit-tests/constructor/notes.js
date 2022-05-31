/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.notes', () => {
  it('should build if notes are a string', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.notes = 'Some notes to test'
    const service = new Service(params)
    const expectedresult = 'Some notes to test'
    expect(service.notes).to.equal(expectedresult)
  })
  it('should throw an Error if notes are not a string', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.notes = 678
    const expectedErrorMessage = `params.notes not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
