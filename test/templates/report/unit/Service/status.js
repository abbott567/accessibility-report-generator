/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Status', () => {
  it('should construct with a passed in status', () => {
    const params = cloneDeep(testData)
    const service = new Service(params)
    const expectedResult = 'live'
    expect(service.status).to.equal(expectedResult)
  })
  it('should throw an Error if no status provided', () => {
    const params = cloneDeep(testData)
    params.status = undefined
    const expectedErrorMessage = `params.status not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
