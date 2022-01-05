/* global describe, it */

const { expect } = require('chai')

describe('Unit: Email - nunjucks', () => {
  it('should build the nunjucks environment', () => {
    const nunjucks = require('../../../../src/templates/email/lib/nunjucks')
    const result = nunjucks.renderString('{{1 === 1}}')
    expect(result).to.equal('true')
  })
})
