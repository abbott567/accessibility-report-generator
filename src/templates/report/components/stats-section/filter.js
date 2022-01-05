function generateStatsSectionData (params) {
  const adjusted = (params.stats_type === 'adjusted_compliance')
  const data = {
    name: params.service_name,
    all: {
      text: '',
      stats: {
        rate: adjusted ? params.stats.rates.adjusted_compliance.total : params.stats.rates.true_compliance.total,
        compliant: params.stats.services.all.compliant,
        total: adjusted ? (params.stats.services.all.live - params.stats.services.all.no_plans) : params.stats.services.all.live
      }
    },
    citizen: {
      text: '',
      stats: {
        rate: adjusted ? params.stats.rates.adjusted_compliance.citizen : params.stats.rates.true_compliance.citizen,
        compliant: params.stats.services.citizen.compliant,
        total: adjusted ? (params.stats.services.citizen.live - params.stats.services.citizen.no_plans) : params.stats.services.citizen.live
      }
    },
    staff: {
      text: '',
      stats: {
        rate: adjusted ? params.stats.rates.adjusted_compliance.staff : params.stats.rates.true_compliance.staff,
        compliant: params.stats.services.staff.compliant,
        total: adjusted ? (params.stats.services.staff.live - params.stats.services.staff.no_plans) : params.stats.services.staff.live
      }
    }
  }

  if (isNaN(data.all.stats.rate)) data.all.stats.rate = 0
  if (isNaN(data.citizen.stats.rate)) data.citizen.stats.rate = 0
  if (isNaN(data.staff.stats.rate)) data.staff.stats.rate = 0

  if (data.all.stats.total === 0) data.all.text = 'No services to make compliant'
  else data.all.text = `${data.all.stats.compliant} of ${data.all.stats.total} services are compliant`

  if (data.citizen.stats.total === 0) data.citizen.text = 'No services to make compliant'
  else data.citizen.text = `${data.citizen.stats.compliant} of ${data.citizen.stats.total} services are compliant`

  if (data.staff.stats.total === 0) data.staff.text = 'No services to make compliant'
  else data.staff.text = `${data.staff.stats.compliant} of ${data.staff.stats.total} services are compliant`

  return data
}

module.exports = generateStatsSectionData
