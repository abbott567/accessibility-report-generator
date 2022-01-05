
/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')

describe('View: Overview', () => {
  it('should render: pages/overview', () => {
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require('../../../src/templates/report/pages/overview/build-html')
    const html = getHTML()
    const $ = cheerio.load(html)
    const title = $('title').text()
    expect(title).to.eql(`Overview - Test Organisation Accessibility Report - ${date}`)
  })
})
