/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')

describe('View: Accessibility Statement', () => {
  it('should render: pages/accessibility-statement', () => {
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require('../../../src/templates/report/pages/accessibility-statement/build-html')
    const HTML = getHTML()
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`Accessibility statement - Test Organisation Accessibility Report - ${date}`)
  })
})
