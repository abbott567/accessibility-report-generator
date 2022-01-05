function params (params) {
  if (params === undefined) throw Error('params not provided for Directorate constructor')
  if (params.name === undefined) throw Error(`params.name not found when constructing Directorate: ${JSON.stringify(params)}`)
  if (params.orgID === undefined) throw Error(`params.orgID not found when constructing Directorate: ${JSON.stringify(params)}`)
  return params
}

module.exports = { params }
