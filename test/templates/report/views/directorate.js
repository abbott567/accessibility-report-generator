
/* global describe, it */

const { expect } = require('chai')
const cheerio = require('cheerio')
const datefns = require('date-fns')
const path = require('path')
const buildDataModel = require(path.resolve('src', 'model', 'build-data-model'))

describe('View: Directorate', () => {
  it('should render: pages/:directorate', () => {
    const { Directorate } = buildDataModel('test')
    const directorate = Directorate.findBySlug('directorate-1')
    const date = datefns.format(new Date(), 'd MMMM yyyy')
    const getHTML = require(path.resolve('src', 'templates', 'report', 'pages', 'directorate', 'build-html'))
    const HTML = getHTML(directorate)
    const $ = cheerio.load(HTML)
    const title = $('title').text()
    expect(title).to.eql(`Directorate 1 - Test Organisation Accessibility Report - ${date}`)
  })
})
