/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> IDs', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for Service constructor'
    expect(() => new Service()).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if no orgID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = undefined
    const expectedErrorMessage = `params.orgID not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if no directorateID provided', () => {
    const params = cloneDeep(testData)
    params.directorateID = undefined
    const expectedErrorMessage = `params.directorateID not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if no PDUID provided', () => {
    const params = cloneDeep(testData)
    params.PDUID = undefined
    const expectedErrorMessage = `params.PDUID not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
})
