
/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')
const path = require('path')

describe('View: Sitemap', () => {
  it('should render: pages/sitemap', () => {
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'sitemap', 'build-html'))
    const HTML = getHTML()
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`Sitemap - Test Organisation Accessibility Report - ${date}`)
  })
})
