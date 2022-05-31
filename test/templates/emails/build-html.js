/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))
const buildEmailData = require(path.resolve('src', 'templates', 'email', 'lib', 'build-email-data'))
const getEmailHTML = require(path.resolve('src', 'templates', 'email', 'lib', 'build-html'))

describe('Int: Email - getEmailHTML()', () => {
  it('should build the html for the email', async () => {
    // Build data model
    const { Org, Service, PDU, Directorate } = buildDataModel('test')
    // Setup email html
    const emails = await buildEmailData(Org, PDU)
    const email = emails[0]
    // Test
    const html = getEmailHTML(email)
    const expectedString = '<style>html'
    expect(html).to.contain(expectedString)
    // Cleanup
    Org.all = []
    Directorate.all = []
    PDU.all = []
    Service.all = []
  })
})
