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
  it('should generate stats.progress of 20 when one piece of evidence is valid', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'failed'
    params.evidence.screen_magnifier.status = 'failed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 20
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 40 when 2 pieces of evidence are valid', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'failed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 40
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 60 when 3 pieces of evidence are valid', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 60
    const actualResult = service.stats.progress
    expect(actualResult).to.eql(expectedResult)
  })
  it('should generate stats.progress of 80 when 4 pieces of evidence are valid', () => {
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
  it('should generate stats.progress of 100 when 5 pieces of evidence are valid', () => {
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
