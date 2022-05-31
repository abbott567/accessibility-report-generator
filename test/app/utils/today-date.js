/* global describe, it */

const path = require('path')
const datefns = require('date-fns')
const { expect } = require('chai')
const todayDate = require(path.resolve('src', 'utils', 'today-date'))

describe('Unt: Utils -> todayDate()', () => {
  it('should return todays date in the format yyyy-MM-dd', () => {
    const result = todayDate
    const todayFormatted = datefns.format(new Date(), 'yyyy-MM-dd')
    expect(result).to.eql(todayFormatted)
  })
})
