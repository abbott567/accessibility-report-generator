/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Unt: Directorate constructor -> directorate.alias', () => {
  it('should construct with a passed in alias', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.alias = 'TD1'
    const directorate = new Directorate(params)
    const expectedResult = 'TD1'
    expect(directorate.alias).to.equal(expectedResult)
  })
  it('should construct with a blank alias if one is not provided', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.alias = undefined
    const directorate = new Directorate(params)
    const expectedResult = ''
    expect(directorate.alias).to.equal(expectedResult)
  })
})
