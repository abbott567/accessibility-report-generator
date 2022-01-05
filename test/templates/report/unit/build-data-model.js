/* global describe, it */

const chai = require('chai')
const chaiSubset = require('chai-subset')
chai.use(chaiSubset)
const expect = require('chai').expect

const buildDataModel = require('../../../../src/model/build-data-model')
const { Org, Directorate, PDU, Service } = buildDataModel()
const orgInfo = require('../../../../test/data/info')
const directorateInfo = require('../../../../test/data/directorates/directorate-1/info')
const PDUInfo = require('../../../../test/data/directorates/directorate-1/pdus/d1-f1/info')
const ServiceInfo = require('../../../../test/data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: buildDataModel', () => {
  it('should build at least 1 Org', () => {
    const actualResult = Org.all.length
    expect(actualResult).to.be.greaterThan(0)
  })

  it('should build an Org using the test data', () => {
    const expectedResult = new Org(orgInfo)
    expectedResult.save()
    expect(Org.all).to.include(expectedResult)
  })

  it('should build at least 1 Directorate', () => {
    const actualResult = Directorate.all.length
    expect(actualResult).to.be.greaterThan(0)
  })

  it('should build a Directorate using the test data', () => {
    const expectedResult = [directorateInfo]
    expect(Directorate.all).to.containSubset(expectedResult)
  })

  it('should build at least 1 PDU', () => {
    const actualResult = PDU.all.length
    expect(actualResult).to.be.greaterThan(0)
  })

  it('should build a PDU using the test data', () => {
    const expectedResult = [PDUInfo]
    expect(PDU.all).to.containSubset(expectedResult)
  })

  it('should build at least 1 Service', () => {
    const actualResult = Service.all.length
    expect(actualResult).to.be.greaterThan(0)
  })

  it('should build a Service using the test data', () => {
    const expectedResult = [ServiceInfo]
    expect(Service.all).to.containSubset(expectedResult)
  })
})
