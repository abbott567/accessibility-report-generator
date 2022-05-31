/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.orgID', () => {
  it('should throw an Error if no orgID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = undefined
    params.directorateID = 1
    const expectedErrorMessage = `params.orgID not found when constructing PDU: ${JSON.stringify(params)}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })
})
