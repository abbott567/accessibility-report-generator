/* global describe, it */

const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const path = require('path')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const cleanDataModel = require(path.resolve('test', 'utils', 'clean-data-model'))
const expect = chai.expect
chai.use(sinonChai)

describe('Routes: PDU', () => {
  it('should have a get function: pages/pdu/pdu', () => {
    const router = require(path.resolve('src', 'templates', 'report', 'pages', 'pdu', 'routes'))
    const expectedResult = router.get('/directorate-1/pdu-1')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    const { get } = require(path.resolve('src', 'templates', 'report', 'pages', 'pdu', 'functions'))
    const req = { params: { directorate: 'directorate-1', pdu: 'd1-pdu-1' } }
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
    // Clean up after
    cleanDataModel()
  })
})
