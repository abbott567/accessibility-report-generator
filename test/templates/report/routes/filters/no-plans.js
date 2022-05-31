/* global describe, it */

const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const path = require('path')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const cleanDataModel = require(path.resolve('test', 'utils', 'clean-data-model'))
const expect = chai.expect
chai.use(sinonChai)

describe('Routes: Filters -> No plans for compliance', () => {
  it('should have a get function: /filters/no-plans-for-compliance', () => {
    const router = require(path.resolve('src', 'templates', 'report', 'pages', 'filters', 'no-plans-for-compliance', 'routes'))
    const expectedResult = router.get('/filters/no-plans-for-compliance')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/critical-services', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    const { get } = require(path.resolve('src', 'templates', 'report', 'pages', 'filters', 'no-plans-for-compliance', 'functions'))
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
    // Clean up after
    cleanDataModel()
  })
})
