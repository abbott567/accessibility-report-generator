function params (params) {
  if (params === undefined) throw Error('params not provided for PDU constructor')
  if (params.name === undefined) throw Error(`params.name not found when constructing PDU: ${JSON.stringify(params)}`)
  if (params.orgID === undefined) throw Error(`params.orgID not found when constructing PDU: ${JSON.stringify(params)}`)
  if (params.directorateID === undefined) throw Error(`params.directorateID not found when constructing PDU: ${JSON.stringify(params)}`)
  return params
}

module.exports = { params }
