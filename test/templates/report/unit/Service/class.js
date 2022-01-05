it('should have a class of "Service"', () => {
  const params = cloneDeep(testData)
  const service = new Service(params)
  const expectedResult = 'Service'
  expect(service.class).to.equal(expectedResult)
})

/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Class', () => {
  it('should have a class of "Service"', () => {
    const params = cloneDeep(testData)
    const service = new Service(params)
    const expectedResult = 'Service'
    expect(service.class).to.equal(expectedResult)
  })
})
