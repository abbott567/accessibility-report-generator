/* global describe, it */

const path = require('path')
const nunjucks = require(path.resolve('src', 'templates', 'report', 'lib', 'nunjucks'))
const { expect } = require('chai')

describe('Nunjucks: Filters -> |prettify', () => {
  it('should have a filter for compliant|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'compliant' })
    const expectedResult = '"compliant"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for very-high|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'very-high' })
    const expectedResult = '"very high risk"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for medium|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'medium' })
    const expectedResult = '"medium risk"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for unknown|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'unknown' })
    const expectedResult = '"unknown risk"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for not-live|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'not-live' })
    const expectedResult = '"not live"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for not-done|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'not-done' })
    const expectedResult = '"not done"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for citizen|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'citizen' })
    const expectedResult = '"citizen facing"'
    expect(testResult).to.equal(expectedResult)
  })

  it('should have a filter for staff|prettify', () => {
    const html = JSON.stringify('{{filter|prettify}}')
    const testResult = nunjucks.renderString(html, { filter: 'staff' })
    const expectedResult = '"staff facing"'
    expect(testResult).to.equal(expectedResult)
  })
})
