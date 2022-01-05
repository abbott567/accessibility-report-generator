/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Service = require('../../../../../src/model/constructors/Service')

const testData = require('../../../../data/directorates/directorate-1/pdus/d1-f1/services/d1-f1-s1/info')

describe('Unt: Service -> Methods', () => {
  it('should return true using isCompliant() method if compliant', () => {
    const params = cloneDeep(testData)
    params.risk = 'compliant'
    const service = new Service(params)
    const expectedResult = true
    const actualResult = service.isCompliant()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return false using isCompliant() method if not compliant', () => {
    const params = cloneDeep(testData)
    params.risk = 'medium'
    const service = new Service(params)
    const expectedResult = false
    const actualResult = service.isCompliant()
    expect(actualResult).to.eql(expectedResult)
  })
  it('should return the progress using the getProgress() method', () => {
    const params = cloneDeep(testData)
    params.evidence.wcag.status = 'passed'
    params.evidence.screen_reader.status = 'passed'
    params.evidence.screen_magnifier.status = 'passed'
    params.evidence.voice_controller.status = 'passed'
    params.evidence.statement.status = 'not-done'
    const service = new Service(params)
    const expectedResult = 80
    const actualResult = service.getProgress()
    expect(actualResult).to.eql(expectedResult)
  })

  it('should have a method to find by slug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Service'
    const service = new Service(params)
    service.save()
    const expectedResult = 'test-service'
    const foundService = Service.findBySlug('test-service')
    expect(foundService.slug).to.equal(expectedResult)
  })
  it('should throw an error if it cannot findBySlug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test PDU'
    const service = new Service(params)
    service.save()
    expect(() => { Service.findBySlug('potato') }).to.throw('Couldnt find a Service with the slug: potato')
  })

  it('should have a method to filter by risk', () => {
    const params1 = cloneDeep(testData)
    params1.name = 'Test Service'
    params1.risk = 'medium'
    const service1 = new Service(params1)
    service1.save()
    const params2 = cloneDeep(testData)
    params2.name = 'Test Service'
    params2.risk = 'high'
    const service2 = new Service(params2)
    service2.save()
    const filteredServices = Service.filterByRisk('medium')
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
  })

  it('should have a method to filter by type', () => {
    const params1 = cloneDeep(testData)
    params1.name = 'Test Service'
    params1.type = 'staff'
    const service1 = new Service(params1)
    service1.save()
    const params2 = cloneDeep(testData)
    params2.name = 'Test Service'
    params2.type = 'citizen'
    const service2 = new Service(params2)
    service2.save()
    const filteredServices = Service.filterByType('citizen')
    expect(filteredServices).to.include(service2)
    expect(filteredServices).to.not.include(service1)
  })

  it('should have a method to filter by plans', () => {
    const params1 = cloneDeep(testData)
    params1.name = 'Test Service'
    params1.plans = 'true'
    const service1 = new Service(params1)
    service1.save()
    const params2 = cloneDeep(testData)
    params2.name = 'Test Service'
    params2.plans = 'false'
    const service2 = new Service(params2)
    service2.save()
    const filteredServices = Service.filterByPlans('true')
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
  })

  it('should have a method to get critical services', () => {
    const params1 = cloneDeep(testData)
    params1.name = 'Test Service'
    params1.critical = 'true'
    const service1 = new Service(params1)
    service1.save()
    const params2 = cloneDeep(testData)
    params2.name = 'Test Service'
    params2.critical = 'false'
    const service2 = new Service(params2)
    service2.save()
    const filteredServices = Service.getCritical()
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
  })

  it('should have a method to get sunsetting services', () => {
    const params1 = cloneDeep(testData)
    params1.name = 'Test Service'
    params1.sunsetting = 'true'
    const service1 = new Service(params1)
    service1.save()
    const params2 = cloneDeep(testData)
    params2.name = 'Test Service'
    params2.sunsetting = 'false'
    const service2 = new Service(params2)
    service2.save()
    const filteredServices = Service.getSunsetting()
    expect(filteredServices).to.include(service1)
    expect(filteredServices).to.not.include(service2)
  })

  it('should have a method to check if critical', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Service'
    params.critical = 'true'
    const service = new Service(params)
    service.save()
    const expectedResult = service.isCritical()
    expect(expectedResult).to.eql(true)
  })
})
