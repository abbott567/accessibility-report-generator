/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const { isValidDate } = require(path.resolve('src', 'utils', 'check-date'))

describe('Unt: Utils -> isValidDate()', () => {
  it('should return true if date is valid', () => {
    const date = new Date()
    const result = isValidDate(date)
    expect(result).to.eql(true)
  })
  it('should return false if date is not valid', () => {
    const date = 'potato'
    const result = isValidDate(date)
    expect(result).to.eql(false)
  })
})
