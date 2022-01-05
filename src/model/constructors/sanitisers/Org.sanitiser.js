const slugify = require('slugify')

function params (validParams) {
  const sanitisedParams = setDefaults(validParams)
  return sanitisedParams
}

function setDefaults (validParams) {
  const sanitisedParams = validParams
  sanitisedParams.slug = slugify(validParams.name, { lower: true })
  if (validParams.alias === undefined) sanitisedParams.alias = ''
  if (validParams.templateData === undefined) sanitisedParams.templateData = {}
  return sanitisedParams
}

module.exports = { params }
