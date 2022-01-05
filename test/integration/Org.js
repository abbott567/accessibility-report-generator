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

describe('Int: Org constructor', () => {
  it('should return an array of Directorates it has using the getDirectorates() method', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id
    const directorate = new Directorate(dirParams)
    directorate.save()
    const expectedResult = [directorate]
    const actualResult = org.getDirectorates()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an empty array using the getDirectorates() method if there are no Directorates belonging to the Org', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    dirParams.orgID = org.id - 1
    const directorate = new Directorate(dirParams)
    directorate.save()
    const expectedResult = []
    const actualResult = org.getDirectorates()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return only Directorates which belong to the Org using the getDirectorates() method if there are more than 1', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams1 = cloneDeep(testData.directorate)
    dirParams1.orgID = org.id
    const directorate1 = new Directorate(dirParams1)
    directorate1.save()
    const dirParams2 = cloneDeep(testData.directorate)
    dirParams2.orgID = org.id - 1
    const directorate2 = new Directorate(dirParams2)
    directorate2.save()
    const expectedResult = [directorate1]
    const actualResult = org.getDirectorates()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an array of PDUs it has using the getPDUs() method', () => {
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
    const expectedResult = [pdu]
    const actualResult = org.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an empty array using the getPDUs() method if there are no PDUs belonging to the Org', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id - 1
    const pdu = new PDU(pduParams)
    pdu.save()
    const expectedResult = []
    const actualResult = org.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return only results which belong to the Org using the getPDUs() method if there are more than 1', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams1 = cloneDeep(testData.pdu)
    pduParams1.orgID = org.id
    const pdu1 = new PDU(pduParams1)
    pdu1.save()
    const pduParams2 = cloneDeep(testData.pdu)
    pduParams2.orgID = org.id - 1
    const pdu2 = new PDU(pduParams2)
    pdu2.save()
    const expectedResult = [pdu1]
    const actualResult = org.getPDUs()
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
    pduParams.orgID = org.id - 1
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id
    const service = new Service(serParams)
    service.save()
    const expectedResult = [service]
    const actualResult = org.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return an empty array using the getServices() method if there are no Services belonging to the Org', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id - 1
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams = cloneDeep(testData.service)
    serParams.orgID = org.id - 1
    const service = new Service(serParams)
    service.save()
    const expectedResult = []
    const actualResult = org.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })

  it('should return only results which belong to the Org using the getServices() method if there are more than 1', () => {
    const orgParams = cloneDeep(testData.org)
    const org = new Org(orgParams)
    org.save()
    const dirParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(dirParams)
    directorate.save()
    const pduParams = cloneDeep(testData.pdu)
    pduParams.orgID = org.id - 1
    const pdu = new PDU(pduParams)
    pdu.save()
    const serParams1 = cloneDeep(testData.service)
    serParams1.orgID = org.id
    const service1 = new Service(serParams1)
    service1.save()
    const serParams2 = cloneDeep(testData.service)
    serParams2.orgID = org.id - 1
    const service2 = new Service(serParams2)
    service2.save()
    const expectedResult = [service1]
    const actualResult = org.getServices()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
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
    serParams.orgID = org.id
    serParams.PDUID = pdu.id
    const service = new Service(serParams)
    service.save()
    const expectedResult = 0
    const actualResult = org.getNumberOfServices({ err: 'false' })
    expect(actualResult).to.equal(expectedResult)
  })
})
