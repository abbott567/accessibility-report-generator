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

describe('Int: Directorate constructor', () => {
  it('should return the Org it belongs to using the getOrg() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = org
    const actualResult = directorate.getOrg()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(false)
  })

  it('should return an array of PDUs it has using the getPDUs() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = [pdu]
    const actualResult = directorate.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an empty array using the getPDUs() method if there are no PDUs belonging to the Directorate', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.directorateID = directorate.id - 1
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = []
    const actualResult = directorate.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return only results which belong to the Directorate using the getPDUs() method if there are more than 1', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams1 = cloneDeep(testData.pdu)
    pduParams1.directorateID = directorate.id
    const pdu1 = new PDU(pduParams1)
    pdu1.save()
    const pduParams2 = cloneDeep(testData.pdu)
    pduParams2.directorateID = directorate.id - 1
    const pdu2 = new PDU(pduParams2)
    pdu2.save()
    const expectedResult = [pdu1]
    const actualResult = directorate.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an array of Services it has using the getServices() method', () => {
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
    const expectedResult = [service]
    const actualResult = directorate.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an empty array using the getServices() method if there are no Services belonging to the Directorate', () => {
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
    serParams.directorateID = directorate.id - 1
    const service = new Service(serParams)
    service.save()
    const expectedResult = []
    const actualResult = directorate.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return only results which belong to the Directorate using the getServices() method if there are more than 1', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams1 = cloneDeep(testData.service)
    serParams1.directorateID = directorate.id
    const service1 = new Service(serParams1)
    service1.save()
    const serParams2 = cloneDeep(testData.service)
    serParams2.directorateID = directorate.id - 1
    const service2 = new Service(serParams2)
    service2.save()
    const expectedResult = [service1]
    const actualResult = directorate.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should save to Directorate.all when using the .save() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    expect(Directorate.all).to.include(directorate)
  })

  it('should not save to Directorate.all when not using the .save() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    expect(Directorate.all).to.not.include(directorate)
  })

  it('should return a found Directorate using findById()', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const result = Directorate.findById(directorate.id)
    expect(result).to.include(directorate)
  })

  it('should throw an error using findById() if no Directorate is found', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    const testID = 98732198
    directorate.save()
    const expectedErrorMessage = `Couldnt find a Directorate with the ID: ${testID}`
    expect(() => { Directorate.findById(testID) }).to.throw(expectedErrorMessage)
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
    const actualResult = directorate.getNumberOfServices({ err: 'false' })
    expect(actualResult).to.equal(expectedResult)
  })
})
