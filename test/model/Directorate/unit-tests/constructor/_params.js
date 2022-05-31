/* global describe, it */

const { expect } = require('chai')
const path = require('path')

const Directorate = require(path.resolve('src', 'model', 'constructors', 'Directorate'))

describe('Unt: Directorate constructor -> new Directorate(params)', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for Directorate constructor'
    expect(() => new Directorate()).to.throw(expectedErrorMessage)
  })
})
