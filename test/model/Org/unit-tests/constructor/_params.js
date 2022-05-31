/* global describe, it */

const { expect } = require('chai')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))

describe('Unt: Org constructor -> new Org(params)', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for Org constructor'
    expect(() => new Org()).to.throw(expectedErrorMessage)
  })
})
