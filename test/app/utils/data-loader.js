/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const loadData = require(path.resolve('src', 'utils', 'data-loader'))

describe('Unt: Utils -> loadData()', () => {
  it('should return test data using loadData(test)', () => {
    const testName = 'Test Organisation'
    const result = loadData('test')
    expect(result.info.name).to.eql(testName)
  })
  it('should return production data using dataLoader("not_test")', () => {
    const testName = 'Test Organisation'
    const result = loadData('not_test')
    expect(result.info.name).to.not.eql(testName)
  })
  it('should return production data using loadData()', () => {
    const testName = 'Test Organisation'
    const result = loadData()
    expect(result.info.name).to.not.eql(testName)
  })
})
