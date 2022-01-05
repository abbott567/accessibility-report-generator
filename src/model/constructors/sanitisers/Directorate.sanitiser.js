const slugify = require('slugify')

function params (validParams) {
  const sanitisedParams = setDefaults(validParams)
  return sanitisedParams
}

function setDefaults (validParams) {
  const sanitisedParams = validParams
  sanitisedParams.slug = slugify(validParams.name, { lower: true })
  if (validParams.alias === undefined) sanitisedParams.alias = ''
  if (validParams.stakeholders === undefined) sanitisedParams.stakeholders = []
  return sanitisedParams
}

module.exports = { params }
