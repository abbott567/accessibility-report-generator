/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testPDU = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Int: Directorate methods -> getPDUs()', () => {
  it('should return an array of PDUs it has using the getPDUs() method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Test
    const expectedResult = [pdu]
    const actualResult = directorate.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
  })

  it('should return an empty array using the getPDUs() method if there are no PDUs belonging to the Directorate', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate 1
    let directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Dir 1'
    directorateParams.orgID = org.id
    const directorate1 = new Directorate(directorateParams)
    directorate1.save()
    // Set up Directorate 2
    directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Dir 2'
    directorateParams.orgID = org.id
    const directorate2 = new Directorate(directorateParams)
    directorate2.save()
    // Set up PDU
    const pduParams = cloneDeep(testPDU)
    pduParams.orgID = org.id
    pduParams.directorateID = directorate2.id
    const pdu = new PDU(pduParams)
    pdu.save()
    // Test
    const expectedResult = []
    const actualResult = directorate1.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
  })

  it('should return only results which belong to the Directorate using the getPDUs() method if there are more than 1', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate 1
    let directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Dir 1'
    directorateParams.orgID = org.id
    const directorate1 = new Directorate(directorateParams)
    directorate1.save()
    // Set up Directorate 2
    directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Dir 2'
    directorateParams.orgID = org.id
    const directorate2 = new Directorate(directorateParams)
    directorate2.save()
    // Set up PDU 1
    let pduParams = cloneDeep(testPDU)
    pduParams.name = 'PDU 1'
    pduParams.orgID = org.id
    pduParams.directorateID = directorate1.id
    const pdu1 = new PDU(pduParams)
    pdu1.save()
    // Set up PDU 2
    pduParams = cloneDeep(testPDU)
    pduParams.name = 'PDU 2'
    pduParams.orgID = org.id
    pduParams.directorateID = directorate2.id
    const pdu2 = new PDU(pduParams)
    pdu2.save()
    // Test
    const expectedResult = [pdu1]
    const actualResult = directorate1.getPDUs()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
  })
})
