/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const Directorate = require('../../../src/model/constructors/Directorate')

const PDU = require('../../../src/model/constructors/PDU')
const Service = require('../../../src/model/constructors/Service')

const testData = {
  org: require('../../data/info'),
  directorate: require('../../data/directorates/directorate-1/info'),
  pdu: require('../../data/directorates/directorate-1/pdus/d1-f1/info'),
  service: require('../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')
}

describe('Int: Directorate -> Stats -> Rates', () => {
  it('should generate stats.rates.true.total as a percentage', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService1 = cloneDeep(testData.service)
    paramsService1.PDUID = pdu.id
    paramsService1.directorateID = directorate.id
    paramsService1.risk = 'compliant'
    const service1 = new Service(paramsService1)
    service1.save()
    const paramsService2 = cloneDeep(testData.service)
    paramsService2.PDUID = pdu.id
    paramsService2.directorateID = directorate.id
    paramsService2.risk = 'medium'
    const service2 = new Service(paramsService2)
    service2.save()
    expect(directorate.stats.rates.true_compliance.total).to.eql(50, 'stats.rates.true.total')
  })

  it('should generate stats.rates.true.citizen as a percentage', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService1 = cloneDeep(testData.service)
    paramsService1.PDUID = pdu.id
    paramsService1.directorateID = directorate.id
    paramsService1.risk = 'compliant'
    paramsService1.type = 'citizen'
    const service1 = new Service(paramsService1)
    service1.save()
    const paramsService2 = cloneDeep(testData.service)
    paramsService2.PDUID = pdu.id
    paramsService2.directorateID = directorate.id
    paramsService2.risk = 'compliant'
    paramsService2.type = 'staff'
    const service2 = new Service(paramsService2)
    service2.save()
    expect(directorate.stats.rates.true_compliance.citizen).to.eql(100, 'stats.rates.true.citizen')
  })

  it('should generate stats.rates.true.staff as a percentage', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService1 = cloneDeep(testData.service)
    paramsService1.PDUID = pdu.id
    paramsService1.directorateID = directorate.id
    paramsService1.risk = 'compliant'
    paramsService1.type = 'citizen'
    const service1 = new Service(paramsService1)
    service1.save()
    const paramsService2 = cloneDeep(testData.service)
    paramsService2.PDUID = pdu.id
    paramsService2.directorateID = directorate.id
    paramsService2.risk = 'compliant'
    paramsService2.type = 'staff'
    const service2 = new Service(paramsService2)
    service2.save()
    expect(directorate.stats.rates.true_compliance.staff).to.eql(100, 'stats.rates.true.staff')
  })

  it('should generate stats.rates.adjusted.all as a percentage', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService1 = cloneDeep(testData.service)
    paramsService1.PDUID = pdu.id
    paramsService1.directorateID = directorate.id
    paramsService1.risk = 'medium'
    paramsService1.plans = 'false'
    const service1 = new Service(paramsService1)
    service1.save()
    const paramsService2 = cloneDeep(testData.service)
    paramsService2.PDUID = pdu.id
    paramsService2.directorateID = directorate.id
    paramsService2.risk = 'compliant'
    paramsService2.plans = 'true'
    const service2 = new Service(paramsService2)
    service2.save()
    expect(directorate.stats.rates.adjusted_compliance.total).to.eql(100, 'stats.rates.adjusted.total')
  })
  it('should generate stats.rates.adjusted.citizen as a percentage', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService1 = cloneDeep(testData.service)
    paramsService1.PDUID = pdu.id
    paramsService1.directorateID = directorate.id
    paramsService1.type = 'citizen'
    paramsService1.risk = 'medium'
    paramsService1.plans = 'false'
    const service1 = new Service(paramsService1)
    service1.save()
    const paramsService2 = cloneDeep(testData.service)
    paramsService2.PDUID = pdu.id
    paramsService2.directorateID = directorate.id
    paramsService2.type = 'citizen'
    paramsService2.risk = 'compliant'
    paramsService2.plans = 'true'
    const service2 = new Service(paramsService2)
    service2.save()
    expect(directorate.stats.rates.adjusted_compliance.citizen).to.eql(100, 'stats.rates.adjusted.citizen')
  })
  it('should generate stats.rates.adjusted.citizen as a percentage', () => {
    const directorateParams = cloneDeep(testData.directorate)
    const directorate = new Directorate(directorateParams)
    directorate.save()
    const paramsPDU = cloneDeep(testData.pdu)
    paramsPDU.directorateID = directorate.id
    const pdu = new PDU(paramsPDU)
    pdu.save()
    const paramsService1 = cloneDeep(testData.service)
    paramsService1.PDUID = pdu.id
    paramsService1.directorateID = directorate.id
    paramsService1.type = 'staff'
    paramsService1.risk = 'medium'
    paramsService1.plans = 'false'
    const service1 = new Service(paramsService1)
    service1.save()
    const paramsService2 = cloneDeep(testData.service)
    paramsService2.PDUID = pdu.id
    paramsService2.directorateID = directorate.id
    paramsService2.type = 'staff'
    paramsService2.risk = 'compliant'
    paramsService2.plans = 'true'
    const service2 = new Service(paramsService2)
    service2.save()
    expect(directorate.stats.rates.adjusted_compliance.staff).to.eql(100, 'stats.rates.adjusted.staff')
  })
})
