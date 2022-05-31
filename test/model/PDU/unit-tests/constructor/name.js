/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.name', () => {
  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.name = 'Test PDU'
    const pdu = new PDU(params)
    const expectedResult = 'Test PDU'
    expect(pdu.name).to.equal(expectedResult)
  })
  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = undefined
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing PDU: ${JSON.stringify(params)}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })
})
