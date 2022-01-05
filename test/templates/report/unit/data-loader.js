/* global describe, it */

const chai = require('chai')
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)
const expect = require('chai').expect

const dataLoader = require('../../../../src/utils/data-loader')

describe('Unt: dataLoader()', () => {
  it('should load test data with dataLoader("test")', () => {
    const result = dataLoader('test')
    const testCase = result.info.name
    const expectedResult = 'Test Organisation'
    expect(testCase).to.eql(expectedResult)
  })

  it('should load actual data with dataLoader("not_test")', () => {
    const result = dataLoader('not_test')
    const testCase = result.info.name
    const expectedResult = 'Test Organisation'
    expect(testCase).to.not.eql(expectedResult)
  })

  it('should load data relavant for env when nothing is specified dataLoader()', () => {
    const result = dataLoader()
    const testCase = result.info.name
    const expectedResult = 'Test Organisation'
    expect(testCase).to.eql(expectedResult)
  })
})
