/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))
const testData = require(path.resolve('test', 'dummy-data', 'directorates', 'directorate-1', 'info'))

describe('Unt: Directorate constructor -> directorate.orgID', () => {
  it('should throw an Error if no orgID provided', () => {
    const params = cloneDeep(testData)
    params.orgID = undefined
    const expectedErrorMessage = `params.orgID not found when constructing Directorate: ${JSON.stringify(params)}`
    expect(() => new Directorate(params)).to.throw(expectedErrorMessage)
  })
})
