require('colors')
const fs = require('fs-jetpack')

async function saveHTML (html, folder, name = 'index') {
  const filename = `${name}.html`
  await fs.append(`${folder}/${filename}`, html)
}

module.exports = saveHTML
