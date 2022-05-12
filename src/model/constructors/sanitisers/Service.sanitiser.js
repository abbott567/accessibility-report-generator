const slugify = require('slugify')

function params (validParams) {
  const sanitisedParams = setDefaults(validParams)
  return sanitisedParams
}

function setDefaults (validParams) {
  const sanitisedParams = validParams
  if (validParams.alias === undefined) sanitisedParams.alias = ''
  if (validParams.risk === undefined) sanitisedParams.risk = 'very-high'
  if (validParams.critical === undefined) sanitisedParams.critical = 'false'
  if (validParams.sunsetting === undefined) sanitisedParams.sunsetting = 'false'
  if (validParams.plans === undefined) sanitisedParams.plans = 'true'
  if (validParams.sunsetDate === undefined) {
    if (validParams.sunsetting === 'true') sanitisedParams.sunsetDate = 'unknown'
    if (validParams.sunsetting === 'false') sanitisedParams.sunsetDate = 'n/a'
  }
  sanitisedParams.slug = slugify(sanitisedParams.name, { lower: true })
  return sanitisedParams
}

module.exports = { params }
