/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.directorateID', () => {
  it('should throw an Error if no directorateID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = undefined
    const expectedErrorMessage = `params.directorateID not found when constructing PDU: ${JSON.stringify(params)}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })
})
