const path = require('path')
const getPreviousMonth = require(path.resolve('src', 'templates', 'email', 'lib', 'previous-month-data'))
const cloneDeep = require('clone-deep')

async function buildEmailData (Org, PDU) {
  const org = Org.all[0]
  const emails = []
  for (const x in PDU.all) {
    const pdu = PDU.all[x]
    const previousMonthData = await getPreviousMonth(pdu)
    const pduData = {
      pdu: {
        name: pdu.name,
        slug: pdu.slug
      },
      thisMonth: { pdu },
      previousMonth: { pdu: previousMonthData }
    }
    for (const i in pdu.stakeholders) {
      const emailData = cloneDeep(pduData)
      emailData.reporter = org.templateData.email.reporter
      emailData.stakeholder = pdu.stakeholders[i]
      emails.push(emailData)
    }
  }
  return emails
}

module.exports = buildEmailData
