/* global describe, it */

const path = require('path')
const chai = require('chai')
const expect = chai.expect

describe('Routes: app', () => {
  it('should have a root path', () => {
    const router = require(path.resolve('src', 'templates', 'report', 'lib', 'routes'))
    const expectedResult = router.get('/')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
})
