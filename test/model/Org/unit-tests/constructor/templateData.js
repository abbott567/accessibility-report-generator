/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org constructor -> org.templateData', () => {
  it('should construct with a blank object if one is not provided', () => {
    const params = cloneDeep(testData)
    params.templateData = undefined
    const org = new Org(params)
    const expectedResult = {}
    expect(org.templateData).to.eql(expectedResult)
  })
  it('should construct with a templateData object if provided one is valid', () => {
    const params = cloneDeep(testData)
    params.templateData = undefined
    const org = new Org(params)
    const expectedResult = params.templateData
    expect(org.templateData).to.eql(expectedResult)
  })
})
