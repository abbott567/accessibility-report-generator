/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const { checkDate } = require(path.resolve('src', 'utils', 'check-date'))

describe('Unt: Utils -> checkDate()', () => {
  it('should throw an error if the date is not valid', () => {
    const date = 'potato'
    const serviceName = 'Test Service'
    const expectedErrorMessage = `Date not valid when constructing service: ${serviceName}`
    expect(() => checkDate(date, serviceName)).to.throw(expectedErrorMessage)
  })
  it('should accept exception unknown', () => {
    const date = 'unknown'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept exception n/a', () => {
    const date = 'n/a'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept MMMM yyyy format', () => {
    const date = 'January 2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept MMMM yy format', () => {
    const date = 'January 22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d MMMM yyyy format', () => {
    const date = '2 January 2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d MMMM yy format', () => {
    const date = '2 January 22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept dd MMMM yyyy format', () => {
    const date = '02 January 2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d MMMM yyyy format', () => {
    const date = '2 January 2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept mm/yyyy format', () => {
    const date = '01/2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept mm/yy format', () => {
    const date = '01/22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d/mm/yyyy format', () => {
    const date = '1/01/2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d/mm/yy format', () => {
    const date = '1/01/22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept dd/mm/yyyy format', () => {
    const date = '01/01/2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept dd/mm/yy format', () => {
    const date = '01/01/22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept mm-yyyy format', () => {
    const date = '01-2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept mm-yy format', () => {
    const date = '01-22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d-mm-yyyy format', () => {
    const date = '1-01-2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept d-mm-yy format', () => {
    const date = '1-01-22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept dd-mm-yyyy format', () => {
    const date = '01-01-2022'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
  it('should accept dd-mm-yy format', () => {
    const date = '01-01-22'
    const result = checkDate(date)
    expect(result).to.eql(date)
  })
})
