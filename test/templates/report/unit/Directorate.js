/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const Directorate = require('../../../../src/model/constructors/Directorate')

const testData = require('../../../data/directorates/directorate-1/info')

describe('Unt: Directorate constructor', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for Directorate constructor'
    expect(() => new Directorate()).to.throw(expectedErrorMessage)
  })

  it('should throw an Error if no orgID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = undefined
    const expectedErrorMessage = `params.orgID not found when constructing Directorate: ${JSON.stringify(params)}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })

  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Directorate'
    const directorate = new Directorate(params)
    const expectedResult = 'Test Directorate'
    expect(directorate.name).to.equal(expectedResult)
  })
  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing Directorate: ${JSON.stringify(params)}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })

  it('should have a class of "Directorate"', () => {
    const params = cloneDeep(testData)
    const directorate = new Directorate(params)
    const expectedResult = 'Directorate'
    expect(directorate.class).to.equal(expectedResult)
  })

  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    params.alias = 'TD1'
    const directorate = new Directorate(params)
    const expectedResult = 'TD1'
    expect(directorate.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.alias = undefined
    const directorate = new Directorate(params)
    const expectedResult = ''
    expect(directorate.alias).to.equal(expectedResult)
  })

  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Directorate'
    const directorate = new Directorate(params)
    const expectedResult = 'test-directorate'
    expect(directorate.slug).to.equal(expectedResult)
  })

  it('should have a method to find by slug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Directorate'
    const directorate = new Directorate(params)
    directorate.save()
    const expectedResult = 'test-directorate'
    const foundDirectorate = Directorate.findBySlug('test-directorate')
    expect(foundDirectorate.slug).to.equal(expectedResult)
  })
  it('should throw an error if it cannot findBySlug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test Directorate'
    const directorate = new Directorate(params)
    directorate.save()
    expect(() => { Directorate.findBySlug('potato') }).to.throw('Couldnt find a Directorate with the slug: potato')
  })
})
