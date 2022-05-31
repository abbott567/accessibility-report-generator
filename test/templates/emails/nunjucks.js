/* global describe, it */

const { expect } = require('chai')
const path = require('path')
const nunjucks = require(path.resolve('src', 'templates', 'email', 'lib', 'nunjucks'))

describe('Unit: Email - nunjucks', () => {
  it('should build the nunjucks environment', () => {
    const result = nunjucks.renderString('{{1 === 1}}')
    expect(result).to.equal('true')
  })
})
