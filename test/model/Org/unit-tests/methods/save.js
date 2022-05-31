/* global describe, it */

const { expect } = require('chai')
const cloneDeep = require('clone-deep')
const path = require('path')

const Org = require(path.resolve('src', 'model', 'constructors', 'Org'))
const testData = require(path.resolve('test', 'dummy-data', 'info'))

describe('Unt: Org methods -> save()', () => {
  it('should save to Org.all when using the .save() method', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    org.save()
    expect(Org.all).to.include(org)
  })
  it('should not save to Org.all when not using the .save() method', () => {
    const params = cloneDeep(testData)
    const org = new Org(params)
    expect(Org.all).to.not.include(org)
  })
})
