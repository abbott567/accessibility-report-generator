/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

describe('Int: Email - locals', () => {
  it('should build the locals object', () => {
    // Build data model
    const { Org, Service, PDU, Directorate } = buildDataModel('test')
    // Test
    const buildEmailLocals = require(path.resolve('src', 'templates', 'email', 'lib', 'build-locals'))
    const locals = buildEmailLocals(Org, Service, PDU, Directorate)
    const orgName = 'Test Organisation'
    expect(locals.org.name).to.equal(orgName)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
