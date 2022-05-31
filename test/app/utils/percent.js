/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const percent = require(path.resolve('src', 'utils', 'percent'))

describe('Unt: Utils -> percent()', () => {
  it('should return 50 using percent(1).of(2)', () => {
    const result = percent(1).of(2)
    expect(result).to.eql(50)
  })
  it('should return 100 using percent(1).of(1)', () => {
    const result = percent(1).of(1)
    expect(result).to.eql(100)
  })
  it('should return 0 using percent(0).of(1)', () => {
    const result = percent(0).of(1)
    expect(result).to.eql(0)
  })
  it('should return 0 using strings instead of numbers', () => {
    const result = percent('moo').of('cow')
    expect(result).to.eql(0)
  })
})
