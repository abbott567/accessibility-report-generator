/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Int: Directorate methods -> Save', () => {
  it('should save to Directorate.all when using the .save() method', () => {
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
    expect(Directorate.all).to.include(directorate)
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
  it('should not save to Directorate.all when not using the .save() method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    directorateParams.name = 'Test Directorate'
    const directorate = new Directorate(directorateParams)
    // Test
    expect(Directorate.all).to.not.include(directorate)
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
})
