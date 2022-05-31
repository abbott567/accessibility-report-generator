require('colors')
const fs = require('fs-jetpack')

async function saveJSON (data, folder, name = 'data') {
  const filename = `${name}.json`
  await fs.append(`${folder}/${filename}`, JSON.stringify(data, null, 2))
}

module.exports = saveJSON
