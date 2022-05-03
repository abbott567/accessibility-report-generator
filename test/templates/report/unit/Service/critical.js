/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Critical', () => {
  it('should throw an error if params.critical is not a boolean', () => {
    const params = cloneDeep(testData)
    params.critical = 'string'
    const expectedErrorMessage = `params.critical not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })

  it('should construct with a critical value of true if provided', () => {
    const params = cloneDeep(testData)
    params.critical = 'true'
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.critical).to.equal(expectedResult)
  })
  it('should construct with a critical value of false if provided', () => {
    const params = cloneDeep(testData)
    params.critical = 'false'
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.critical).to.equal(expectedResult)
  })
  it('should throw an error if no critical value is provided', () => {
    const params = cloneDeep(testData)
    params.critical = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
})
