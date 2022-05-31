const path = require('path')
const buildEmailData = require(path.resolve('src', 'templates', 'email', 'lib', 'build-email-data'))
const buildEmail = require(path.resolve('src', 'templates', 'email', 'export', 'tasks', 'export:emails--build'))
const saveJSON = require(path.resolve('src', 'utils', 'save-json'))
const todayDate = require(path.resolve('src', 'utils', 'today-date'))

async function buildAllEmails (Org, PDU) {
  const emails = await buildEmailData(Org, PDU)
  for (const i in emails) {
    const email = emails[i]
    await buildEmail(email)
  }
  await saveJSON(emails, `output/emails/${todayDate}`, '_data')
  console.log('Emails:'.green, 'JSON saved: '.brightCyan, `output/emails/${todayDate}/_data.json`)
}

module.exports = buildAllEmails
