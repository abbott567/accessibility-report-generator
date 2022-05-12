const slugify = require('slugify')
const datefns = require('date-fns')

function params (params) {
  if (params === undefined) throw Error('params not provided for Service constructor')
  name(params)
  org(params)
  directorate(params)
  PDU(params)
  status(params)
  type(params)
  critical(params)
  sunsetting(params)
  plans(params)
  legacy(params)
  risk(params)
  evidence(params)
  notes(params)
  return params
}

function name (params) {
  if (params.name === undefined) throw Error(`params.name not found when constructing Service: ${JSON.stringify(params)}`)
}

function org (params) {
  if (params.orgID === undefined) throw Error(`params.orgID not found when constructing Service: ${JSON.stringify(params)}`)
}
function directorate (params) {
  if (params.directorateID === undefined) throw Error(`params.directorateID not found when constructing Service: ${JSON.stringify(params)}`)
}
function PDU (params) {
  if (params.PDUID === undefined) throw Error(`params.PDUID not found when constructing Service: ${JSON.stringify(params)}`)
}

function status (params) {
  if (params.status === undefined) throw Error(`params.status not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.status) {
    const slug = slugify(params.status, { lower: true })
    const valid = ['live', 'not-live']
    if (!valid.includes(slug)) throw Error(`params.status not valid when constructing Service: ${JSON.stringify(params)}`)
  }
}

function type (params) {
  if (params.type === undefined) throw Error(`params.type not found when constructing Service: ${JSON.stringify(params)}`)
}

function critical (params) {
  if (params.critical === undefined) throw Error(`params.critical not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.critical) {
    const slug = slugify(params.critical, { lower: true })
    const valid = ['true', 'false']
    if (!valid.includes(slug)) throw Error(`params.critical not valid when constructing Service: ${JSON.stringify(params)}`)
  }
}

function sunsetting (params) {
  if (params.sunsetting === undefined) throw Error(`params.sunsetting not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.sunsetting) {
    const slug = slugify(params.sunsetting, { lower: true })
    const valid = ['true', 'false']
    if (!valid.includes(slug)) throw Error(`params.sunsetting not valid when constructing Service: ${JSON.stringify(params)}`)
  }
}

function plans (params) {
  if (params.plans === undefined) throw Error(`params.plans not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.plans) {
    const slug = slugify(params.plans, { lower: true })
    const valid = ['true', 'false']
    if (!valid.includes(slug)) throw Error(`params.plans not valid when constructing Service: ${JSON.stringify(params)}`)
  }
}

function legacy (params) {
  if (params.legacy === undefined) throw Error(`params.legacy not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.legacy) {
    const slug = slugify(params.legacy, { lower: true })
    const valid = ['true', 'false']
    if (!valid.includes(slug)) throw Error(`params.legacy not valid when constructing Service: ${JSON.stringify(params)}`)
    if (params.legacy === 'true' && params.plans === 'true') throw Error(`Legacy services can't be made compliant: ${JSON.stringify(params)}`)
  }
}

function risk (params) {
  if (params.risk === undefined) throw Error(`params.risk not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.risk) {
    const slug = slugify(params.risk, { lower: true })
    const valid = ['very-high', 'high', 'medium', 'low', 'compliant', 'unknown']
    if (!valid.includes(slug)) throw Error(`params.risk not valid when constructing Service: ${JSON.stringify(params)}`)
    if (params.risk !== 'unknown' && params.risk !== 'compliant' && params.status === 'not-live') console.warn('Not live but has a risk status:'.yellow + ` ${params.name}`)
  }
}

function evidence (params) {
  if (params.evidence === undefined) throw Error(`params.evidence not found when constructing Service: ${JSON.stringify(params)}`)
  checkEvidence(params)
}

function checkEvidence (params) {
  const evidence = ['wcag', 'screen_reader', 'screen_magnifier', 'voice_controller', 'statement']
  evidence.forEach(ev => {
    const set = params.evidence[ev]
    // Status
    const status = set.status
    if (status === undefined) throw Error(`params.evidence.${ev}.status not found when constructing Service: ${params.name}`)
    const slug = slugify(status, { lower: true })
    const valid = ['done', 'not-done', 'passed', 'failed', 'basic']
    if (!valid.includes(slug)) throw Error(`params.evidence.${ev}.status (${slug}) not valid when constructing Service: ${params.name}`)
    // Date
    const date = set.date
    if (date === undefined) throw Error(`params.evidence.${ev}.date not found when constructing Service: ${params.name}`)
    const validDate = checkDate(date, params.name)
    set.status = slug
    set.date = validDate
  })
}

function checkDate (date, serviceName) {
  const allowedExceptions = ['n/a', 'unknown']
  if (!allowedExceptions.includes(date)) {
    const parseAttempt = datefns.parse(date, 'MMMM yyyy', new Date())
    const isDate = isValidDate(parseAttempt)
    if (!isDate) throw Error(`Date not valid when constructing service: ${serviceName} - ${date}`)
  }
  return date
}

function isValidDate (date) {
  return date instanceof Date && !isNaN(date)
}

function notes (params) {
  if (params.notes === undefined) params.notes = ''
  if (typeof params.notes !== 'string') throw Error(`params.notes not valid when constructing Service: ${JSON.stringify(params)}`)
}

module.exports = {
  params,
  name,
  id: { org, directorate, PDU },
  status,
  type,
  critical,
  sunsetting,
  plans,
  risk,
  evidence,
  notes
}
