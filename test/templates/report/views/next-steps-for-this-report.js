
/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')
const path = require('path')

describe('View: Next steps', () => {
  it('should render: pages/next-steps', () => {
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'next-steps-for-this-report', 'build-html'))
    const HTML = getHTML()
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`Next steps for this report - Test Organisation Accessibility Report - ${date}`)
  })
})
