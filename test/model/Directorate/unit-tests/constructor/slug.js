/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Unt: Directorate constructor -> directorate.slug', () => {
  it('should construct automatically with a slug', () => {
    const params = cloneDeep(testData)
    params.orgID = 1
    params.name = 'Test Directorate'
    const directorate = new Directorate(params)
    const expectedResult = 'test-directorate'
    expect(directorate.slug).to.equal(expectedResult)
  })
})
