/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Plans', () => {
  it('should construct with a plans value of true if provided', () => {
    const params = cloneDeep(testData)
    params.plans = 'true'
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.plans).to.equal(expectedResult)
  })
  it('should construct with a plans value of false if provided', () => {
    const params = cloneDeep(testData)
    params.plans = 'false'
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.plans).to.equal(expectedResult)
  })
  it('should construct with a plans value of true if none is provided', () => {
    const params = cloneDeep(testData)
    params.plans = undefined
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.plans).to.equal(expectedResult)
  })
  it('should throw an error if params.plans is not a boolean', () => {
    const params = cloneDeep(testData)
    params.plans = 'string'
    const expectedErrorMessage = `params.plans not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
