/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testOrg = require(path.resolve('test', 'dummy-data', 'info'))
const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testDirectorate = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Int: Org methods -> Org.getDirectorates()', () => {
  it('should return an array of Directorates it has using the getDirectorates() method', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Set up Directorate
    const directorateParams = cloneDeep(testDirectorate)
    directorateParams.orgID = org.id
    const directorate = new Directorate(directorateParams)
    directorate.save()
    // Test
    const expectedResult = [directorate]
    const actualResult = org.getDirectorates()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })
  it('should return an empty array using the getDirectorates() method if there are no Directorates belonging to the Org', () => {
    // Set up Org
    const orgParams = cloneDeep(testOrg)
    const org = new Org(orgParams)
    org.save()
    // Test
    const expectedResult = []
    const actualResult = org.getDirectorates()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
  })
  it('should return only Directorates which belong to the Org using the getDirectorates() method if there are more than 1', () => {
    // Set up Org
    let orgParams = cloneDeep(testOrg)
    const org1 = new Org(orgParams)
    orgParams.name = 'Org 1'
    org1.save()
    // Set up Org
    orgParams = cloneDeep(testOrg)
    orgParams.name = 'Org 2'
    const org2 = new Org(orgParams)
    org2.save()
    // Set up Directorate 1
    let directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Directorate 1'
    directorateParams.orgID = org1.id
    const directorate1 = new Directorate(directorateParams)
    directorate1.save()
    // Set up Directorate 2
    directorateParams = cloneDeep(testDirectorate)
    directorateParams.name = 'Directorate 2'
    directorateParams.orgID = org2.id
    const directorate2 = new Directorate(directorateParams)
    directorate2.save()
    // Test
    const expectedResult = [directorate1]
    const actualResult = org1.getDirectorates()
    expect(actualResult).to.eql(expectedResult)
    expect(Array.isArray(actualResult)).to.eql(true)
    // Cleanup
    Org.all = []
    Directorate.all = []
  })
})
