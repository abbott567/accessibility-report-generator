/* global describe, it */

const path = require('path')
const chai = require('chai')
const sinon = require('sinon')
const chaiSubset = require('chai-subset')
const cleanDataModel = require(path.resolve('test', 'utils', 'clean-data-model'))
const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
chai.use(chaiSubset)
const expect = require('chai').expect

const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

describe('Int: buildDataModel', () => {
  before(() => {
    sinon.restore()
    sinon.stub(console, 'log')
    sinon.stub(console, 'warn')
  })
  after(() => {
    sinon.restore()
  })
  it('should build an Org using the production data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel()
    // Test
    const testName = 'Test Organisation'
    expect(Org.all.length).to.be.greaterThan(0)
    expect(Org.all[0].name).to.not.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build an Org using the test data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    // Test
    const { Org } = buildDataModel('test')
    const testName = 'Test Organisation'
    expect(Org.all.length).to.be.greaterThan(0)
    expect(Org.all[0].name).to.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build a Directorate using the production data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel()
    // Test
    const testName = 'Directorate 1'
    expect(Directorate.all.length).to.be.greaterThan(0)
    expect(Directorate.all[0].name).to.not.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build a Directorate using the test data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    const { Directorate } = buildDataModel('test')
    const testName = 'Directorate 1'
    expect(Directorate.all.length).to.be.greaterThan(0)
    expect(Directorate.all[0].name).to.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build a PDU using the production data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel()
    const { PDU } = buildDataModel()
    const testName = 'D1 PDU 1'
    expect(PDU.all.length).to.be.greaterThan(0)
    expect(PDU.all[0].name).to.not.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build a PDU using the test data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    const { PDU } = buildDataModel('test')
    const testName = 'D1 PDU 1'
    expect(PDU.all.length).to.be.greaterThan(0)
    expect(PDU.all[0].name).to.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build a Service using the production data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel()
    const { Service } = buildDataModel()
    const testName = 'D1 F1 Service 1'
    expect(Service.all.length).to.be.greaterThan(0)
    expect(Service.all[0].name).to.not.eql(testName)
    // Clean up after
    cleanDataModel()
  })

  it('should build a Service using the test data', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
    const { Service } = buildDataModel('test')
    const testName = 'D1 F1 Service 1'
    expect(Service.all.length).to.be.greaterThan(0)
    expect(Service.all[0].name).to.eql(testName)
    // Clean up after
    cleanDataModel()
  })
})
