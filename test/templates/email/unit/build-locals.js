/* global describe, it */

const { expect } = require('chai')

describe('Unit: Email - build-locals', () => {
  it('should build the locals object', () => {
    const locals = require('../../../../src/templates/email/lib/build-locals')
    expect(locals.org).to.not.equal(undefined)
  })
})
