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

describe('Int: Service constructor', () => {
  it('should return the Org it belongs to using the getOrg() method', () => {
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
    serParams.orgID = org.id
    const service = new Service(serParams)
    service.save()
    const expectedResult = org
    const actualResult = service.getOrg()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(false)
  })

  it('should return the PDU it belongs to using the getPDU() method', () => {
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
    const expectedResult = pdu
    const actualResult = service.getPDU()
    expect(actualResult).to.eql(expectedResult)
  })

  it('should have a return the Directorate it belongs to using the getDirectorate() method', () => {
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
    serParams.directorateID = directorate.id
    const service = new Service(serParams)
    service.save()
    const expectedResult = directorate
    const actualResult = service.getDirectorate()
    expect(actualResult).to.eql(expectedResult)
  })

  it('should save to Service.all when using the .save() method', () => {
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
    const service = new Service(serParams)
    service.save()
    expect(Service.all).to.include(service)
  })

  it('should not save to Service.all when not using the .save() method', () => {
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
    const service = new Service(serParams)
    expect(Service.all).to.not.include(service)
  })

  it('should return the correct Service using the findByID() method', () => {
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
    const service = new Service(serParams)
    service.save()
    const expectedResult = service
    const actualResult = Service.findById(service.id)
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
    const serParams = cloneDeep(testData.service)
    const service = new Service(serParams)
    service.save()
    const testID = 98732198
    const expectedErrorMessage = `Couldnt find a Service with the ID: ${testID}`
    expect(() => { Service.findById(testID) }).to.throw(expectedErrorMessage)
  })
})
