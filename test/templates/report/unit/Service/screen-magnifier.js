/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Screen Magnifier', () => {
  it('should throw an Error if no screen_magnifier evidence provided', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = undefined
    const expectedErrorMessage = `params.evidence.screen_magnifier.status not found when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if screen_magnifier evidence provided is invalid', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'potato'
    const expectedErrorMessage = `params.evidence.screen_magnifier.status not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build with screen_magnifier status "passed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "failed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "not-done" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "passed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'PASSED'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "failed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'FAILED'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "not-done" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'NOT-DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "passed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'PaSseD'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "failed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'faILEd'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "not-done" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'not-doNE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with screen_magnifier status "not-done" if provided without hyphen', () => {
    const params = cloneDeep(testData)
    params.evidence.screen_magnifier.status = 'not done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.screen_magnifier.status
    expect(actualResult).to.eql(expectedResult)
  })
})
