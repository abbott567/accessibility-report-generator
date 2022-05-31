/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org constructor -> org.slug', () => {
  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'test-organisation'
    expect(org.slug).to.equal(expectedResult)
  })
})
