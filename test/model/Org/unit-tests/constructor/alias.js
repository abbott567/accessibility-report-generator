/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org constructor -> org.alias', () => {
  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'TORG'
    expect(org.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.alias = undefined
    const org = new Org(params)
    const expectedResult = ''
    expect(org.alias).to.equal(expectedResult)
  })
})
