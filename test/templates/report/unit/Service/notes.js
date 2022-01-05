/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Notes', () => {
  it('should throw an Error if notes are not a string', () => {
    const params = cloneDeep(testData)
    params.notes = 678
    const expectedErrorMessage = `params.notes not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
