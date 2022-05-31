/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Int: Directorate methods -> findByID()', () => {
  it('should return a found Directorate using findByID()', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    directorateParams.name = 'Test Directorate'
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Test
    const result = Directorate.findByID(directorate.id)
    expect(result).to.include(directorate)
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
  it('should throw an error using findByID() if no Directorate is found', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    directorateParams.name = 'Test Directorate'
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Test
    const testID = 98732198
    const expectedErrorMessage = `Couldnt find a Directorate with the ID: ${testID}`
    expect(() => { Directorate.findByID(testID) }).to.throw(expectedErrorMessage)
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
})
