/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Stats', () => {
  it('should generate stats.progress as an number', () => {
    const params = cloneDeep(testData)
    const service = new Service(params)
    const expectedResult = 'number'
    const actualResult = service.stats.progress
    expect(typeof actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 15 when only basic checks are done', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'basic'
    params.evidence.screen_reader.status = 'not-done'
    params.evidence.screen_magnifier.status = 'not-done'
    params.evidence.voice_controller.status = 'not-done'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 15
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 50 when one piece of evidence is valid and statement not done', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'failed'
    params.evidence.screen_magnifier.status = 'failed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 50
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 60 when 2 pieces of evidence are valid and statement not done', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'failed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 60
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 70 when 3 pieces of evidence are valid and statement not done', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 70
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 80 when 4 pieces of evidence are valid and statement not done', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 100 when 4 pieces of evidence are valid and statement is done', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 100
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
})
