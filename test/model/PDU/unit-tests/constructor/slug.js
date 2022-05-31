/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.slug', () => {
  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.name = 'Test PDU'
    const pdu = new PDU(params)
    const expectedResult = 'test-pdu'
    expect(pdu.slug).to.equal(expectedResult)
  })
})
