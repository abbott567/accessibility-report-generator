/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org constructor -> org.name', () => {
  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing Org: ${JSON.stringify(params)}`
    expect(() => new Org(params)).to.throw(expectedErrorMessage)
  })
  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'Test Organisation'
    expect(org.name).to.equal(expectedResult)
  })
})
