/* global describe, it */

const { expect } = require('chai')
const path = require('path')

const PDU = require(path.resolve('src', 'model', 'constructors', 'PDU'))

describe('Unt: PDU constructor -> new PDU(params)', () => {
  it('should throw an Error if no params provided', () => {
    const expectedErrorMessage = 'params not provided for PDU constructor'
    expect(() => new PDU()).to.throw(expectedErrorMessage)
  })
})
