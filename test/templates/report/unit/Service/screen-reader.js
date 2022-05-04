/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Screen Reader', () => {
  it('should throw an Error if no screen_reader evidence provided', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = undefined
    const expectedErrorMessage = `params.evidence.screen_reader.status not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if screen_reader evidence provided is invalid', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'potato'
    const expectedErrorMessage = `params.evidence.screen_reader.status (potato) not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build with screen_reader status "passed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "failed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "not-done" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "passed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'PASSED'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "failed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'FAILED'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "not-done" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'NOT-DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "passed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'PaSseD'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "failed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'faILEd'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "not-done" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'not-doNE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_reader status "not-done" if provided without hyphen', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_reader.status = 'not done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_reader.status
    expect(actualResult).to.eql(expectedResult)
  })
})
