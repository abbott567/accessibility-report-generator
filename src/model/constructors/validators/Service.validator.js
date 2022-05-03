const slugify = require('slugify')

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

function risk (params) {
  if (params.risk === undefined) throw Error(`params.risk not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.risk) {
    const slug = slugify(params.risk, { lower: true })
    const valid = ['very-high', 'high', 'medium', 'low', 'compliant', 'unknown']
    if (!valid.includes(slug)) throw Error(`params.risk not valid when constructing Service: ${JSON.stringify(params)}`)
    if (params.risk !== 'unknown' && params.status === 'not-live') console.warn('Not live but has a risk status:'.yellow + ` ${params.name}`)
  }
}

function evidence (params) {
  if (params.evidence === undefined) throw Error(`params.evidence not found when constructing Service: ${JSON.stringify(params)}`)
  wcag(params)
  screenReader(params)
  screenMagnifier(params)
  voiceController(params)
  statement(params)
}

function wcag (params) {
  if (params.evidence.wcag.status === undefined) throw Error(`params.evidence.wcag.status not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.evidence.wcag.date === undefined) throw Error(`params.evidence.wcag.date not found when constructing Service: ${JSON.stringify(params)}`)
  const slug = slugify(params.evidence.wcag.status, { lower: true })
  const valid = ['not-done', 'passed', 'failed']
  if (!valid.includes(slug)) throw Error(`params.evidence.wcag.status not valid when constructing Service: ${JSON.stringify(params)}`)
  params.evidence.wcag.status = slug
}

function screenReader (params) {
  if (params.evidence.screen_reader.status === undefined) throw Error(`params.evidence.screen_reader.status not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.evidence.screen_reader.date === undefined) throw Error(`params.evidence.screen_reader.date not found when constructing Service: ${JSON.stringify(params)}`)
  const slug = slugify(params.evidence.screen_reader.status, { lower: true })
  const valid = ['not-done', 'passed', 'failed']
  if (!valid.includes(slug)) throw Error(`params.evidence.screen_reader.status not valid when constructing Service: ${JSON.stringify(params)}`)
  params.evidence.screen_reader.status = slug
}

function screenMagnifier (params) {
  if (params.evidence.screen_magnifier.status === undefined) throw Error(`params.evidence.screen_magnifier.status not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.evidence.screen_magnifier.date === undefined) throw Error(`params.evidence.screen_magnifier.date not found when constructing Service: ${JSON.stringify(params)}`)
  const slug = slugify(params.evidence.screen_magnifier.status, { lower: true })
  const valid = ['not-done', 'passed', 'failed']
  if (!valid.includes(slug)) throw Error(`params.evidence.screen_magnifier.status not valid when constructing Service: ${JSON.stringify(params)}`)
  params.evidence.screen_magnifier.status = slug
}

function voiceController (params) {
  if (params.evidence.voice_controller.status === undefined) throw Error(`params.evidence.voice_controller.status not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.evidence.voice_controller.date === undefined) throw Error(`params.evidence.voice_controller.date not found when constructing Service: ${JSON.stringify(params)}`)
  const slug = slugify(params.evidence.voice_controller.status, { lower: true })
  const valid = ['not-done', 'passed', 'failed']
  if (!valid.includes(slug)) throw Error(`params.evidence.voice_controller.status not valid when constructing Service: ${JSON.stringify(params)}`)
  params.evidence.voice_controller.status = slug
}

function statement (params) {
  if (params.evidence.statement.status === undefined) throw Error(`params.evidence.statement.status not found when constructing Service: ${JSON.stringify(params)}`)
  if (params.evidence.statement.date === undefined) throw Error(`params.evidence.statement.date not found when constructing Service: ${JSON.stringify(params)}`)
  const slug = slugify(params.evidence.statement.status, { lower: true })
  const valid = ['not-done', 'done']
  if (!valid.includes(slug)) throw Error(`params.evidence.statement.status not valid when constructing Service: ${JSON.stringify(params)}`)
  params.evidence.statement.status = slug
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
