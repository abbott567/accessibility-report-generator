/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service methods -> getProgress()', () => {
  it('should return 100% progress if compliant', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 100
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 90% progress if wcag failed', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'failed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 90
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 95% progress if wcag basic', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'basic'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 95
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 90% progress if screen reader failed', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'failed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 90
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 90% progress if screen magnifier failed', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'failed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 90
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 90% progress if voice controller failed', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'failed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 90
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 90% progress if statement failed', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'failed'
    const service = new Service(params)
    const expectedResult = 90
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 80% progress if wcag is not done', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'not-done'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 80% progress if screen_reader is not done', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'not-done'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 80% progress if screen_magnifier is not done', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'not-done'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 80% progress if voice_controller is not done', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'not-done'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return 80% progress if statement is not done', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })
})
