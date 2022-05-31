/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.class', () => {
  it('should have a class of "PDU"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    const pdu = new PDU(params)
    const expectedResult = 'PDU'
    expect(pdu.class).to.equal(expectedResult)
  })
})
