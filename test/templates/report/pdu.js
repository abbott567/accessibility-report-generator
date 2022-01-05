
/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')

describe('View: PDU', () => {
  it('should render: pages/:directorate/:pdu', () => {
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require('../../../src/templates/report/pages/pdu/build-html')
    const HTML = getHTML('d1-pdu-1')
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`D1 PDU 1 - Test Organisation Accessibility Report - ${date}`)
  })
})
