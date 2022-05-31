/* global describe, it */

const path = require('path')
const fs = require('fs-jetpack')
const { expect } = require('chai')
const saveHTML = require(path.resolve('src', 'utils', 'save-html'))

describe('Unt: Utils -> saveHTML()', async () => {
  it('should save HTML to a file with a passed in filename', async () => {
    // Cleanup beforehand just incase
    fs.remove('test/output')
    // Test
    const folder = 'test/output'
    const html = '<h1>Hello World!</h1>'
    const filename = 'hello'
    await saveHTML(html, folder, filename)
    const result = fs.read(`${folder}/${filename}.html`)
    expect(result).to.eql(html)
    // Cleanup after
    fs.remove('test/output')
  })
  it('should save HTML to a file with a filename of index if one is not provided', async () => {
    // Cleanup beforehand just incase
    fs.remove('test/output')
    // Test
    const folder = 'test/output'
    const html = '<h1>Hello World!</h1>'
    await saveHTML(html, folder)
    const result = fs.read(`${folder}/index.html`)
    expect(result).to.eql(html)
    // Cleanup after
    fs.remove('test/output')
  })
})
