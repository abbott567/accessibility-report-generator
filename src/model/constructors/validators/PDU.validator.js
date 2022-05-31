function params (params) {
  if (params === undefined) throw Error('params not provided for PDU constructor')
  if (params.name === undefined) throw Error(`params.name not found when constructing PDU: ${JSON.stringify(params)}`)
  if (params.orgID === undefined) throw Error(`params.orgID not found when constructing PDU: ${JSON.stringify(params)}`)
  if (params.directorateID === undefined) throw Error(`params.directorateID not found when constructing PDU: ${JSON.stringify(params)}`)
  if (params.stakeholders) {
    params.stakeholders.forEach(stakeHolder => {
      if (stakeHolder.first_name === undefined) throw Error(`Stakeholder first_name missing when constructing PDU: ${params.name}`)
      if (stakeHolder.last_name === undefined) throw Error(`Stakeholder last_name missing when constructing PDU: ${params.name}`)
      if (stakeHolder.email === undefined) throw Error(`Stakeholder email missing when constructing PDU: ${params.name}`)
    })
  }
  return params
}

module.exports = { params }
