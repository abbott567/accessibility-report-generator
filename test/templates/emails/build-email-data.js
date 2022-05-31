/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const buildEmailData = require(path.resolve('src', 'templates', 'email', 'lib', 'build-email-data'))

describe('Int: Email - buildEmailData()', () => {
  it('should build the html for the email', async () => {
    // Build data model
    const { Org, Service, PDU, Directorate } = buildDataModel('test')
    // Test
    const emails = await buildEmailData(Org, PDU)
    const expectedRecipient = 'john.smith@test.com'
    expect(emails[0].stakeholder.email).to.eql(expectedRecipient)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
