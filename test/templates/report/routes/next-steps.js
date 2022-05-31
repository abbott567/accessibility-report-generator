/* global describe, it */

const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const path = require('path')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const cleanDataModel = require(path.resolve('test', 'utils', 'clean-data-model'))
const expect = chai.expect
chai.use(sinonChai)

describe('Routes: Next steps', () => {
  it('should have a get function: pages/next-steps-for-this-report', () => {
    const router = require(path.resolve('src', 'templates', 'report', 'pages', 'next-steps-for-this-report', 'routes'))
    const expectedResult = router.get('/next-steps-for-this-report')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    // Test
    const { get } = require(path.resolve('src', 'templates', 'report', 'pages', 'next-steps-for-this-report', 'functions'))
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