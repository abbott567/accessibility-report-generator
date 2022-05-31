/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Int: Directorate methods -> findBySlug()', () => {
  it('should have a method to find by slug', () => {
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
    const expectedResult = 'test-directorate'
    const foundDirectorate = Directorate.findBySlug('test-directorate')
    expect(foundDirectorate.slug).to.equal(expectedResult)
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
  it('should throw an error if it cannot findBySlug', () => {
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
    expect(() => { Directorate.findBySlug('potato') }).to.throw('Couldnt find a Directorate with the slug: potato')
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
})
