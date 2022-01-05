/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Org = require('../../../../src/model/constructors/Org')

const testData = require('../../../data/info')

describe('Unt: Org constructor', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for Org constructor'
    expect(() => new Org()).to.throw(expectedErrorMessage)
  })

  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing Org: ${JSON.stringify(params)}`
    expect(() => new Org(params)).to.throw(expectedErrorMessage)
  })

  it('should have a class of "Org"', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'Org'
    expect(org.class).to.equal(expectedResult)
  })

  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'Test Organisation'
    expect(org.name).to.equal(expectedResult)
  })

  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'test-organisation'
    expect(org.slug).to.equal(expectedResult)
  })

  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    const expectedResult = 'TORG'
    expect(org.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.alias = undefined
    const org = new Org(params)
    const expectedResult = ''
    expect(org.alias).to.equal(expectedResult)
  })

  it('should save to Org.all when using the .save() method', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    org.save()
    expect(Org.all).to.include(org)
  })

  it('should not save to Org.all when not using the .save() method', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    expect(Org.all).to.not.include(org)
  })

  it('should return a found Org using findById()', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    org.save()
    const result = Org.findById(org.id)
    expect(result).to.include(org)
  })

  it('should throw an error using findById() if no Org is found', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    org.save()
    const testID = 9873498
    const expectedErrorMessage = `Couldnt find an Org with the ID: ${testID}`
    expect(() => { Org.findById(testID) }).to.throw(expectedErrorMessage)
  })
})
