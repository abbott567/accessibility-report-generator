/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Unt: Directorate constructor -> directorate.stakeholders', () => {
  it('should construct with an empty array of stakeholders if none are provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.stakeholders = undefined
    const directorate = new Directorate(params)
    const expectedResult = []
    expect(directorate.stakeholders).to.eql(expectedResult)
  })
  it('should construct with an array of stakeholders if there are some provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    const directorate = new Directorate(params)
    const expectedResult = [
      {
        email: 'jane.doe@test.com',
        first_name: 'Jane',
        last_name: 'Doe'
      }
    ]
    expect(directorate.stakeholders).to.eql(expectedResult)
  })
  it('should theow an error if stakeholder.first_name is missing', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.stakeholders = [
      {
        email: 'jane.doe@test.com',
        first_name: undefined,
        last_name: 'Doe'
      }
    ]
    const expectedErrorMessage = `Stakeholder first_name missing when constructing PDU: ${params.name}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })
  it('should theow an error if stakeholder.last_name is missing', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.stakeholders = [
      {
        email: 'jane.doe@test.com',
        first_name: 'Jane',
        last_name: undefined
      }
    ]
    const expectedErrorMessage = `Stakeholder last_name missing when constructing PDU: ${params.name}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })
  it('should theow an error if stakeholder.email is missing', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.stakeholders = [
      {
        email: undefined,
        first_name: 'Jane',
        last_name: 'Doe'
      }
    ]
    const expectedErrorMessage = `Stakeholder email missing when constructing PDU: ${params.name}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })
})
