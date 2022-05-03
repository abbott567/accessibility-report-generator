/* global describe, it */
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const expect = chai.expect
const cloneDeep = require('clone-deep')
chai.use(sinonChai)

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Risk', () => {
  it('should throw an Error if risk provided is not valid', () => {
    const params = cloneDeep(testData)
    params.risk = 'potato'
    const expectedErrorMessage = `params.risk not valid when constructing Service: ${JSON.stringify(params)}`
    expect(() => new Service(params)).to.throw(expectedErrorMessage)
  })
  it('should construct with a passed in valid risk', () => {
    const params = cloneDeep(testData)
    params.risk = 'medium'
    const service = new Service(params)
    const expectedResult = 'medium'
    expect(service.risk).to.equal(expectedResult)
  })
  it('should throw an error if no risk value is provided', () => {
    const params = cloneDeep(testData)
    params.risk = undefined
    expect(() => { Service(params) }).to.throw(Error)
  })
  it('should force risk status to compliant if stats.progress is 100', () => {
    const params = cloneDeep(testData)
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
    sinon.spy(console, 'warn')
    const spyCall = console.warn
    const params = cloneDeep(testData)
    params.status = 'not-live'
    params.risk = 'medium'
    const service = new Service(params)
    service.save()
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})
