/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Statement', () => {
  it('should throw an Error if no statement evidence provided', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = undefined
    const expectedErrorMessage = `params.evidence.statement.status not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if statement evidence provided is invalid', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'potato'
    const expectedErrorMessage = `params.evidence.statement.status not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build with statement status "done" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 'done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with statement status "not-done" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with statement status "done" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'DONE'
    const service = new Service(params)
    const expectedResult = 'done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with statement status "not-done" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'NOT-DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with statement status "done" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'dONe'
    const service = new Service(params)
    const expectedResult = 'done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with statement status "not-done" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'nOT-dONe'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with statement status "not-done" if provided without hyphen', () => {
    const params = cloneDeep(testData)
    params.evidence.statement.status = 'not done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.statement.status
    expect(actualResult).to.eql(expectedResult)
  })
})
