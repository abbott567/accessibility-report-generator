/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Name', () => {
  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Service'
    const service = new Service(params)
    const expectedResult = 'Test Service'
    expect(service.name).to.equal(expectedResult)
  })
  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
