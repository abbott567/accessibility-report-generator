/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.alias', () => {
  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.alias = 'TPDU'
    const pdu = new PDU(params)
    const expectedResult = 'TPDU'
    expect(pdu.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.alias = undefined
    const pdu = new PDU(params)
    const expectedResult = ''
    expect(pdu.alias).to.equal(expectedResult)
  })
})
