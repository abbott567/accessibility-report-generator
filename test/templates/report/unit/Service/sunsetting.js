/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Sunsetting', () => {
  it('should throw an error if params.sunsetting is not a boolean', () => {
    const params = cloneDeep(testData)
    params.sunsetting = 'string'
    const expectedErrorMessage = `params.sunsetting not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should construct with a sunsetting value of true if provided', () => {
    const params = cloneDeep(testData)
    params.sunsetting = 'true'
    const service = new Service(params)
    const expectedResult = 'true'
    expect(service.sunsetting).to.equal(expectedResult)
  })
  it('should construct with a sunsetting value of false if provided', () => {
    const params = cloneDeep(testData)
    params.sunsetting = 'false'
    const service = new Service(params)
    const expectedResult = 'false'
    expect(service.sunsetting).to.equal(expectedResult)
  })
  it('should throw an error if no sunsetting value is provided', () => {
    const params = cloneDeep(testData)
    params.sunsetting = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
})
