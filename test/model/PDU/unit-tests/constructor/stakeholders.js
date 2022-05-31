/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Unt: PDU constructor -> pdu.stakeholders', () => {
  it('should construct with an empty array of stakeholders if none are provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.stakeholders = undefined
    const pdu = new PDU(params)
    const expectedResult = []
    expect(pdu.stakeholders).to.eql(expectedResult)
  })
  it('should construct with an array of stakeholders if there are some provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    const pdu = new PDU(params)
    const expectedResult = [
      {
        email: 'john.smith@test.com',
        first_name: 'John',
        last_name: 'Smith'
      }
    ]
    expect(pdu.stakeholders).to.eql(expectedResult)
  })
  it('should theow an error if stakeholder.first_name is missing', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.stakeholders = [
      {
        email: 'john.smith@test.com',
        first_name: undefined,
        last_name: 'Smith'
      }
    ]
    const expectedErrorMessage = `Stakeholder first_name missing when constructing PDU: ${params.name}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })
  it('should theow an error if stakeholder.last_name is missing', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.stakeholders = [
      {
        email: 'john.smith@test.com',
        first_name: 'John',
        last_name: undefined
      }
    ]
    const expectedErrorMessage = `Stakeholder last_name missing when constructing PDU: ${params.name}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })
  it('should theow an error if stakeholder.email is missing', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.stakeholders = [
      {
        email: undefined,
        first_name: 'John',
        last_name: 'Smith'
      }
    ]
    const expectedErrorMessage = `Stakeholder email missing when constructing PDU: ${params.name}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })
})
