/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Org = require('../../src/model/constructors/Org')
const Directorate = require('../../src/model/constructors/Directorate')
const PDU = require('../../src/model/constructors/PDU')
const Service = require('../../src/model/constructors/Service')

const testData = {
  org: require('../data/info'),
  directorate: require('../data/directorates/directorate-1/info'),
  pdu: require('../data/directorates/directorate-1/pdus/d1-f1/info'),
  service: require('../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')
}

describe('Int: PDU constructor', () => {
  it('should return the Org it belongs to using the getOrg() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = org
    const actualResult = pdu.getOrg()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(false)
  })

  it('should return the directorate it belongs to using the getDirectorate() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = directorate
    const actualResult = pdu.getDirectorate()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(false)
  })

  it('should return an array of services it has using the getServices() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    const expectedResult = [service]
    const actualResult = pdu.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an empty array using the getServices() method if there are no services belonging to the PDU', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id - 1
    const service = new Service(serParams)
    service.save()
    const expectedResult = []
    const actualResult = pdu.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return only Services which belong to the PDU using the getServices() method if there are more than 1', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const ser1Params = cloneDeep(testData.service)
    ser1Params.PDUID = pdu.id
    const service1 = new Service(ser1Params)
    service1.save()
    const ser2Params = cloneDeep(testData.service)
    ser2Params.PDUID = pdu.id - 1
    const service2 = new Service(ser2Params)
    service2.save()
    const expectedResult = [service1]
    const actualResult = pdu.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return the correct PDU using the findByID() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = pdu
    const actualResult = PDU.findById(pdu.id)
    expect(actualResult).to.eql(expectedResult)
  })

  it('should throw an error using findById() if no PDU is found', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const testID = 98732198
    const expectedErrorMessage = `Couldnt find a PDU with the ID: ${testID}`
    expect(() => { PDU.findById(testID) }).to.throw(expectedErrorMessage)
  })

  it('should save to PDU.all when using the .save() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    expect(PDU.all).to.include(pdu)
  })

  it('should not save to PDU.all when not using the .save() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    expect(PDU.all).to.not.include(pdu)
  })

  it('should return 0 if getNumberOfServices() filter is not setup', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    const expectedResult = 0
    const actualResult = pdu.getNumberOfServices({ err: 'false' })
    expect(actualResult).to.equal(expectedResult)
  })
})
