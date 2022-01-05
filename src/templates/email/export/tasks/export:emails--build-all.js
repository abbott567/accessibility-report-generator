const buildEmailData = require('../../lib/build-email-data')
const buildEmail = require('./export:emails--build')
const saveJSON = require('../../../../utils/save-json')
const todayDate = require('../../../../utils/today-date')

async function buildAllEmails () {
  const emails = await buildEmailData()
  for (const i in emails) {
    const email = emails[i]
    await buildEmail(email)
  }
  await saveJSON(emails, `output/emails/${todayDate}`, '_data')
  console.log('Emails:'.green, 'JSON saved: '.brightCyan, `output/emails/${todayDate}/_data.json`)
}

module.exports = buildAllEmails
