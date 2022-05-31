const fs = require('fs-jetpack')

async function cleanFolder (folder, message) {
  const folderExists = await fs.exists(folder)
  if (folderExists) await fs.remove(folder)
  await fs.dir(folder)
  console.log(message)
}

module.exports = cleanFolder
