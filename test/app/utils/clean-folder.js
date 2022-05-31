/* global describe, it */

const path = require('path')
const fs = require('fs-jetpack')
const sinon = require('sinon')
const { expect } = require('chai')
const cleanFolder = require(path.resolve('src', 'utils', 'clean-folder'))

describe('Unt: Utils -> cleanFolder()', async () => {
  it('should create a passed in folder if it does not exist', async () => {
    // Stub out console logs to stop noise in test suite
    sinon.stub(console, 'log')
    // Test
    const folder = 'test/output'
    await cleanFolder(folder)
    const result = fs.exists(folder)
    expect(result).to.eql('dir')
    // Cleanup
    sinon.restore()
    fs.remove('test/output')
  })
  it('should clean out a passed in folder if it already exist', async () => {
    // Stub out console logs to stop noise in test suite
    sinon.stub(console, 'log')
    // Setup test folder and add a html file
    const folder = 'test/output'
    await fs.append(`${folder}/test.html`, '<h1>Hello World</h1>')
    // Test
    await cleanFolder(folder)
    const result = fs.exists(`${folder}/test.html`)
    expect(result).to.eql(false)
    // Cleanup
    sinon.restore()
    fs.remove('test/output')
  })
})
