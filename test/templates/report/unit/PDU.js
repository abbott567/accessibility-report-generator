/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')

const PDU = require('../../../../src/model/constructors/PDU')

const testData = require('../../../data/directorates/directorate-1/pdus/d1-f1/info')

describe('Unt: PDU constructor', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for PDU constructor'
    expect(() => new PDU()).to.throw(expectedErrorMessage)
  })

  it('should throw an Error if no orgID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = undefined
    const expectedErrorMessage = `params.orgID not found when constructing PDU: ${JSON.stringify(params)}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })

  it('should throw an Error if no directorateID provided', () => {
    const params = cloneDeep(testData)
    params.directorateID = undefined
    const expectedErrorMessage = `params.directorateID not found when constructing PDU: ${JSON.stringify(params)}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })

  it('should construct with a passed in name', () => {
    const params = cloneDeep(testData)
    params.name = 'Test PDU'
    const pdu = new PDU(params)
    const expectedResult = 'Test PDU'
    expect(pdu.name).to.equal(expectedResult)
  })
  it('should throw an Error if no name provided', () => {
    const params = cloneDeep(testData)
    params.name = undefined
    const expectedErrorMessage = `params.name not found when constructing PDU: ${JSON.stringify(params)}`
    expect(() => new PDU(params)).to.throw(expectedErrorMessage)
  })

  it('should have a class of "PDU"', () => {
    const params = cloneDeep(testData)
    const pdu = new PDU(params)
    const expectedResult = 'PDU'
    expect(pdu.class).to.equal(expectedResult)
  })

  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    params.alias = 'TPDU'
    const pdu = new PDU(params)
    const expectedResult = 'TPDU'
    expect(pdu.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.alias = undefined
    const pdu = new PDU(params)
    const expectedResult = ''
    expect(pdu.alias).to.equal(expectedResult)
  })

  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test PDU'
    const pdu = new PDU(params)
    const expectedResult = 'test-pdu'
    expect(pdu.slug).to.equal(expectedResult)
  })

  it('should have a method to find by slug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test PDU'
    const pdu = new PDU(params)
    pdu.save()
    const expectedResult = 'test-pdu'
    const foundPDU = PDU.findBySlug('test-pdu')
    expect(foundPDU.slug).to.equal(expectedResult)
  })
  it('should throw an error if it cannot findBySlug', () => {
    const params = cloneDeep(testData)
    params.name = 'Test PDU'
    const pdu = new PDU(params)
    pdu.save()
    expect(() => { PDU.findBySlug('potato') }).to.throw('Couldnt find a PDU with the slug: potato')
  })
})
