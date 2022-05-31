/* global describe, it */

const path = require('path')
const fs = require('fs-jetpack')
const { expect } = require('chai')
const saveJSON = require(path.resolve('src', 'utils', 'save-json'))

describe('Unt: Utils -> saveJSON()', async () => {
  it('should save JSON to a file with a passed in filename', async () => {
    // Cleanup beforehand just incase
    fs.remove('test/output')
    // Test
    const folder = 'test/output'
    const json = JSON.stringify({ hello: 'world' })
    const filename = 'hello'
    await saveJSON(json, folder, filename)
    const result = JSON.parse(fs.read(path.resolve(folder, `${filename}.json`)))
    expect(result).to.eql(json)
    // Cleanup after
    fs.remove('test/output')
  })
  it('should save JSON to a file with a filename of data if one is not provided', async () => {
    // Cleanup beforehand just incase
    fs.remove('test/output')
    // Test
    const folder = 'test/output'
    const json = JSON.stringify({ hello: 'world' })
    await saveJSON(json, folder)
    const result = JSON.parse(fs.read(`${folder}/data.json`))
    expect(result).to.eql(json)
    // Cleanup after
    fs.remove('test/output')
  })
})
