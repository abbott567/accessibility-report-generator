/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Alias', () => {
  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    params.alias = 'TS'
    const service = new Service(params)
    const expectedResult = 'TS'
    expect(service.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.alias = undefined
    const service = new Service(params)
    const expectedResult = ''
    expect(service.alias).to.equal(expectedResult)
  })
})
