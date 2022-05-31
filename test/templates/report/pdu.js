
/* global describe, it */

const path = require('path')
const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

describe('View: PDU', () => {
  it('should render: pages/:directorate/:pdu', () => {
    const { PDU } = buildDataModel('test')
    const pdu = PDU.findBySlug('d1-pdu-1')
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'pdu', 'build-html'))
    const HTML = getHTML(pdu)
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`D1 PDU 1 - Test Organisation Accessibility Report - ${date}`)
  })
})
