
/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')

describe('View: Directorate', () => {
  it('should render: pages/:directorate', () => {
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require('../../../src/templates/report/pages/directorate/build-html')
    const HTML = getHTML('directorate-1')
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`Directorate 1 - Test Organisation Accessibility Report - ${date}`)
  })
})
