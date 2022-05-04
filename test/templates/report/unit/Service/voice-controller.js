/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Voice Controller', () => {
  it('should throw an Error if no voice_controller evidence provided', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = undefined
    const expectedErrorMessage = `params.evidence.voice_controller.status not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if voice_controller evidence provided is invalid', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'potato'
    const expectedErrorMessage = `params.evidence.voice_controller.status (potato) not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should build with voice_controller status "passed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'passed'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "failed" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'failed'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "not-done" if provided in lowercase', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "passed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'PASSED'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "failed" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'FAILED'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "not-done" if provided in uppercase', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'NOT-DONE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "passed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'PaSseD'
    const service = new Service(params)
    const expectedResult = 'passed'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "failed" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'faILEd'
    const service = new Service(params)
    const expectedResult = 'failed'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "not-done" if provided in mixed-case', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'not-doNE'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
  it('should build with voice_controller status "not-done" if provided without hyphen', () => {
    const params = cloneDeep(testData)
    params.evidence.voice_controller.status = 'not done'
    const service = new Service(params)
    const expectedResult = 'not-done'
    const actualResult = service.evidence.voice_controller.status
    expect(actualResult).to.eql(expectedResult)
  })
})
