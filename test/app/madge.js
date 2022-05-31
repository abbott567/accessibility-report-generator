/* global describe, it */
const madge = require('madge')
const { expect } = require('chai')

describe('App: Madge', () => {
  it('should find no circular dependancies', async () => {
    const results = await madge('.')
    const circularDependancies = results.circular()
    expect(circularDependancies.length, circularDependancies.join('\n')).to.eql(0)
  })
})
