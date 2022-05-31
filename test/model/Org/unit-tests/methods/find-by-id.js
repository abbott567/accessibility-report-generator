/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org methods -> findByID()', () => {
  it('should return a found Org using findByID()', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    org.save()
    const result = Org.findByID(org.id)
    expect(result).to.include(org)
  })
  it('should throw an error using findByID() if no Org is found', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    org.save()
    const testID = 9873498
    const expectedErrorMessage = `Couldnt find an Org with the ID: ${testID}`
    expect(() => { Org.findByID(testID) }).to.throw(expectedErrorMessage)
  })
})
