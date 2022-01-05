const getEmailHTML = require('../../lib/build-html')
const saveHTML = require('../../../../utils/save-html')
const todayDate = require('../../../../utils/today-date')

async function buildEmail (data) {
  const html = await getEmailHTML(data)
  await saveHTML(html, `output/emails/${todayDate}`, `${data.pdu.slug}__${data.stakeholder.email}`)
  console.log('Emails:'.green, 'HTML saved: '.cyan, `${data.pdu.slug}__${data.stakeholder.email}.html`)
}

module.exports = buildEmail
