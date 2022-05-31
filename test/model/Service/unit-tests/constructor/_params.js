/* global describe, it */

const { expect } = require('chai')
const path = require('path')

const Service = require(path.resolve('src', 'model', 'constructors', 'Service'))

describe('Unt: Service constructor -> new Service(params)', () => {
  it('should throw an error if params is undefined', () => {
    const expectedErrorMessage = 'params not provided for Service constructor'
    expect(() => new Service()).to.throw(expectedErrorMessage)
  })
})
