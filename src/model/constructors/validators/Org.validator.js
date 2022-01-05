function params (params) {
  if (params === undefined) throw Error('params not provided for Org constructor')
  if (params.name === undefined) throw Error(`params.name not found when constructing Org: ${JSON.stringify(params)}`)
  return params
}

module.exports = { params }
