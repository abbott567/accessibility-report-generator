/* global describe, it */

const path = require('path')
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const { expect } = require('chai')

describe('Nunjucks: Filters -> |isNaN', () => {
  it('should have a filter for x|isNaN', () => {
    const html = JSON.stringify('{{x|isNaN}}')
    const testResult = nunjucks.renderString(html, { x: 'potato' })
    const expectedResult = '"true"'
    expect(testResult).to.equal(expectedResult)
  })
})
