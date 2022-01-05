/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Slug', () => {
  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Service'
    const service = new Service(params)
    const expectedResult = 'test-service'
    expect(service.slug).to.equal(expectedResult)
  })
})
