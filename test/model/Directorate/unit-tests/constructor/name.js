/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Unt: Directorate constructor -> directorate.name', () => {
  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.name = 'Test Directorate'
    const directorate = new Directorate(params)
    const expectedResult = 'Test Directorate'
    expect(directorate.name).to.equal(expectedResult)
  })
  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing Directorate: ${JSON.stringify(params)}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })
})
