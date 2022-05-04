/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> WCAG', () => {
  it('should throw an Error if no wcag evidence provided', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = undefined
    const expectedErrorMessage = `params.evidence.wcag.status not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if wcag evidence provided is invalid', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'potato'
    const expectedErrorMessage = `params.evidence.wcag.status (potato) not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build with wcag status "passed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "failed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "not-done" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "passed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'PASSED'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "failed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'FAILED'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "not-done" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'NOT-DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "passed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'PaSseD'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "failed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'faILed'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "not-done" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'noT-DOne'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with wcag status "not-done" if provided without hyphen', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'not done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.wcag.status
    expect(actualResult).to.eql(expectedResult)
  })
})
