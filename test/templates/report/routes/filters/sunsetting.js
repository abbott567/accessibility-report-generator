/* global describe, it */

const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const path = require('path')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const cleanDataModel = require(path.resolve('test', 'utils', 'clean-data-model'))
const expect = chai.expect
chai.use(sinonChai)

describe('Routes: Filters -> Sunsetting services', () => {
  it('should have a get function: /filters/sunsetting-services', () => {
    const router = require(path.resolve('src', 'templates', 'report', 'pages', 'filters', 'sunsetting-services', 'routes'))
    const expectedResult = router.get('/filters/sunsetting-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/sunsetting-services', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    const { get } = require(path.resolve('src', 'templates', 'report', 'pages', 'filters', 'sunsetting-services', 'functions'))
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
