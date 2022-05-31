/* global describe, it */
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')
const expect = chai.expect
chai.use(sinonChai)

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

describe('Unt: Service constructor -> service.risk', () => {
  it('should throw an Error if risk provided is undefined', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = undefined
    const expectedErrorMessage = `params.risk not found when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should throw an Error if risk provided is not valid', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'potato'
    const expectedErrorMessage = `params.risk not valid when constructing Service: ${params.name}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should construct with a risk of very-high', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'very-high'
    const service = new Service(params)
    const expectedResult = 'very-high'
    expect(service.risk).to.equal(expectedResult)
  })
  it('should construct with a risk of high', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'high'
    const service = new Service(params)
    const expectedResult = 'high'
    expect(service.risk).to.equal(expectedResult)
  })
  it('should construct with a risk of medium', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'medium'
    const service = new Service(params)
    const expectedResult = 'medium'
    expect(service.risk).to.equal(expectedResult)
  })
  it('should construct with a risk of low', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'low'
    const service = new Service(params)
    const expectedResult = 'low'
    expect(service.risk).to.equal(expectedResult)
  })
  it('should throw an error if no risk value is provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
  it('should force risk status to compliant if stats.progress is 100', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.risk = 'medium'
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'done'
    const service = new Service(params)
    const expectedResult = 'compliant'
    const actualResult = service.risk
    expect(actualResult).to.eql(expectedResult)
  })
  it('should throw a warning if not-live service has a risk status', () => {
    sinon.stub(console, 'warn')
    const spyCall = console.warn
    const params = cloneDeep(testData)
    params.orgID = 1
    params.directorateID = 1
    params.PDUID = 1
    params.status = 'not-live'
    params.risk = 'medium'
    const service = new Service(params)
    expect(service.status).to.equal('not-live')
    expect(service.risk).to.equal('medium')
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})
