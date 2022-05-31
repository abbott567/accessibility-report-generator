/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Unt: Directorate constructor -> directorate.class', () => {
  it('should have a class of "Directorate"', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    const directorate = new Directorate(params)
    const expectedResult = 'Directorate'
    expect(directorate.class).to.equal(expectedResult)
  })
})
