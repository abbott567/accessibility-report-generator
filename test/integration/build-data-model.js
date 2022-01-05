/* global describe, it */

const chai = require('chai')
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)
const expect = require('chai').expect

const buildDataModel = require('../../src/model/build-data-model')
const { Org } = buildDataModel()

describe('Int: buildDataModel', () => {
  it('should use src data when not in test mode', () => {
    const expectedResult = [{ name: 'Test Organisation' }]
    expect(Org.all.length > 0)
    expect(Org.all).to.containSubset(expectedResult)
    process.env.NODE_ENV = 'test'
  })
})
