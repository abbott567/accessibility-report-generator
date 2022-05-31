// /* global describe, it */

// const { expect } = require('chai')
// const cloneDeep = require('clone-deep')
// const path = require('path')

// const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
// const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
// const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
// const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))
// const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
// const testPDU = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))
// const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))
// const testService = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'services', 'd1-f1-s1', 'info'))

// describe('Int: Org methods -> Org.getServices()', () => {
//   it('should return an array of Services it has using the getServices() method', () => {
//     // Set up Org
//     const orgParams = cloneDeep(testOrg)
//     const org = new Org(orgParams)
//     org.save()
//     // Set up Directorate
//     const directorateParams = cloneDeep(testDirectorate)
//     directorateParams.orgID = org.id
//     const directorate = new Directorate(directorateParams)
//     directorate.save()
//     // Set up PDU
//     const pduParams = cloneDeep(testPDU)
//     pduParams.orgID = org.id
//     pduParams.directorateID = directorate.id
//     const pdu = new PDU(pduParams)
//     pdu.save()
//     // Set up Service
//     const serviceParams = cloneDeep(testService)
//     serviceParams.orgID = org.id
//     serviceParams.directorateID = directorate.id
//     serviceParams.PDUID = pdu.id
//     const service = new Service(serviceParams)
//     service.save()
//     // Test
//     const expectedResult = [service]
//     const actualResult = org.getServices()
//     expect(actualResult).to.eql(expectedResult)
//     expect(Array.isArray(actualResult)).to.eql(true)
//   })
//   it('should return an empty array using the getServices() method if there are no Services belonging to the Org', () => {
//     const orgParams = cloneDeep(testData.org)
//     const org = new Org(orgParams)
//     org.save()
//     const dirParams = cloneDeep(testData.directorate)
//     const directorate = new Directorate(dirParams)
//     directorate.save()
//     const pduParams = cloneDeep(testData.pdu)
//     pduParams.orgID = org.id - 1
//     const pdu = new PDU(pduParams)
//     pdu.save()
//     const serParams = cloneDeep(testData.service)
//     serParams.orgID = org.id - 1
//     const service = new Service(serParams)
//     service.save()
//     const expectedResult = []
//     const actualResult = org.getServices()
//     expect(actualResult).to.eql(expectedResult)
//     expect(Array.isArray(actualResult)).to.eql(true)
//   })
//   it('should return only results which belong to the Org using the getServices() method if there are more than 1', () => {
//     const orgParams = cloneDeep(testData.org)
//     const org = new Org(orgParams)
//     org.save()
//     const dirParams = cloneDeep(testData.directorate)
//     const directorate = new Directorate(dirParams)
//     directorate.save()
//     const pduParams = cloneDeep(testData.pdu)
//     pduParams.orgID = org.id - 1
//     const pdu = new PDU(pduParams)
//     pdu.save()
//     const serParams1 = cloneDeep(testData.service)
//     serParams1.orgID = org.id
//     const service1 = new Service(serParams1)
//     service1.save()
//     const serParams2 = cloneDeep(testData.service)
//     serParams2.orgID = org.id - 1
//     const service2 = new Service(serParams2)
//     service2.save()
//     const expectedResult = [service1]
//     const actualResult = org.getServices()
//     expect(actualResult).to.eql(expectedResult)
//     expect(Array.isArray(actualResult)).to.eql(true)
//   })

//   it('should return 0 if getNumberOfServices() filter is not setup', () => {
//     const orgParams = cloneDeep(testData.org)
//     const org = new Org(orgParams)
//     org.save()
//     const dirParams = cloneDeep(testData.directorate)
//     const directorate = new Directorate(dirParams)
//     directorate.save()
//     const pduParams = cloneDeep(testData.pdu)
//     const pdu = new PDU(pduParams)
//     pdu.save()
//     const serParams = cloneDeep(testData.service)
//     serParams.orgID = org.id
//     serParams.PDUID = pdu.id
//     const service = new Service(serParams)
//     service.save()
//     const expectedResult = 0
//     const actualResult = org.getNumberOfServices({ err: 'false' })
//     expect(actualResult).to.equal(expectedResult)
//   })
// })
