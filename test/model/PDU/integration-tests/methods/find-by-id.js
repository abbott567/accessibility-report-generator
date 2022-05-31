/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')
const cleanDataModel = require(path.resolve('test', 'utils', 'clean-data-model'))
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))
const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))
const testPDU = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'pdus', 'd1-f1', 'info'))

describe('Int: PDU methods -> PDU.findByID()', () => {
  it('should have a method to find by id', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
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
    const expectedResult = pdu
    const foundPDU = PDU.findByID(pdu.id)
    expect(foundPDU).to.equal(expectedResult)
    // Clean up after
    cleanDataModel()
  })
  it('should throw an error if it cannot findByID', () => {
    // Clean up before
    cleanDataModel()
    buildDataModel('test')
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
    const testID = 7872727
    expect(() => { PDU.findByID(testID) }).to.throw(`Couldnt find a PDU with the ID: ${testID}`)
    // Clean up after
    cleanDataModel()
  })
})
