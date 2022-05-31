/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org constructor -> org.class', () => {
  it('should have a class of "Org"', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'Org'
    expect(org.class).to.equal(expectedResult)
  })
})
