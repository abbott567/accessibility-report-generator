require('colors')
const fs = require('fs-jetpack')

function generateDirectoratesWorksheet (workbook, Directorate, tabName) {
  let directorates = Directorate.all
  const overrideExists = fs.exists('./src/templates/excel/export/overrides/directorates.js')
  if (overrideExists) {
    console.log('Excel:'.yellow, 'Overriding directorate data'.yellow)
    const overrideDirectorates = require('../overrides/directorates')
    directorates = overrideDirectorates(directorates)
  }
  const wsOverview = workbook.addWorksheet(tabName)
  wsOverview.columns = [
    { header: 'Name', key: 'directorate_name', width: 20 },
    { header: 'Aias', key: 'directorate_alias', width: 20 },
    { header: '(%) All - True compliance', key: 'rates_true_total', width: 20 },
    { header: '(%) Citizen - True compliance', key: 'rates_true_citizen', width: 20 },
    { header: '(%) Staff - True compliance', key: 'rates_true_staff', width: 20 },
    { header: '(%) All - Adjusted compliance', key: 'rates_adjusted_total', width: 20 },
    { header: '(%) Citizen - Adjusted compliance', key: 'rates_adjusted_citizen', width: 20 },
    { header: '(%) Staff - Adjusted compliance', key: 'rates_adjusted_staff', width: 20 },
    { header: '(Total) - Number of services', key: 'all_total', width: 20 },
    { header: '(Total) - Live', key: 'all_live', width: 20 },
    { header: '(Total) - Live and Compliant', key: 'all_live_compliant', width: 20 },
    { header: '(Total) - Live and Not-Compliant', key: 'all_live_not_compliant', width: 20 },
    { header: '(Total) - Not live', key: 'all_not_live', width: 20 },
    { header: '(Total) - Critical', key: 'all_critical', width: 20 },
    { header: '(Total) - Sunsetting', key: 'all_sunsetting', width: 20 },
    { header: '(Total) - Compliant', key: 'all_compliant', width: 20 },
    { header: '(Total) - Very high risk', key: 'all_risk_very_high', width: 20 },
    { header: '(Total) - High risk', key: 'all_risk_high', width: 20 },
    { header: '(Total) - Medium risk', key: 'all_risk_medium', width: 20 },
    { header: '(Total) - Unknown risk', key: 'all_risk_unknown', width: 20 },
    { header: '(Total) - No plans for compliance', key: 'all_no_plans', width: 20 },
    { header: '(Citizen) - Number of services', key: 'citizen_total', width: 20 },
    { header: '(Citizen) - Live', key: 'citizen_live', width: 20 },
    { header: '(Citizen) - Live and Compliant', key: 'citizen_live_compliant', width: 20 },
    { header: '(Citizen) - Live and Not-Compliant', key: 'citizen_live_not_compliant', width: 20 },
    { header: '(Citizen) - Not live', key: 'citizen_not_live', width: 20 },
    { header: '(Citizen) - Critical', key: 'citizen_critical', width: 20 },
    { header: '(Citizen) - Sunsetting', key: 'citizen_sunsetting', width: 20 },
    { header: '(Citizen) - Compliant', key: 'citizen_compliant', width: 20 },
    { header: '(Citizen) - Very high risk', key: 'citizen_risk_very_high', width: 20 },
    { header: '(Citizen) - High risk', key: 'citizen_risk_high', width: 20 },
    { header: '(Citizen) - Medium risk', key: 'citizen_risk_medium', width: 20 },
    { header: '(Citizen) - Unknown risk', key: 'citizen_risk_unknown', width: 20 },
    { header: '(Citizen) - No plans for compliance', key: 'citizen_no_plans', width: 20 },
    { header: '(Staff) - Number of services', key: 'staff_total', width: 20 },
    { header: '(Staff) - Live', key: 'staff_live', width: 20 },
    { header: '(Staff) - Live and Compliant', key: 'staff_live_compliant', width: 20 },
    { header: '(Staff) - Live and Not-Compliant', key: 'staff_live_not_compliant', width: 20 },
    { header: '(Staff) - Not live', key: 'staff_not_live', width: 20 },
    { header: '(Staff) - Critical', key: 'staff_critical', width: 20 },
    { header: '(Staff) - Sunsetting', key: 'staff_sunsetting', width: 20 },
    { header: '(Staff) - Compliant', key: 'staff_compliant', width: 20 },
    { header: '(Staff) - Very high risk', key: 'staff_risk_very_high', width: 20 },
    { header: '(Staff) - High risk', key: 'staff_risk_high', width: 20 },
    { header: '(Staff) - Medium risk', key: 'staff_risk_medium', width: 20 },
    { header: '(Staff) - Unknown risk', key: 'staff_risk_unknown', width: 20 },
    { header: '(Staff) - No plans for compliance', key: 'staff_no_plans', width: 20 }
  ]
  directorates.forEach(directorate => {
    wsOverview.addRow({
      directorate_name: directorate.name,
      directorate_alias: directorate.alias,
      rates_true_total: directorate.stats.rates.true_compliance.total,
      rates_true_citizen: directorate.stats.rates.true_compliance.citizen,
      rates_true_staff: directorate.stats.rates.true_compliance.staff,
      rates_adjusted_total: directorate.stats.rates.adjusted_compliance.total,
      rates_adjusted_citizen: directorate.stats.rates.adjusted_compliance.citizen,
      rates_adjusted_staff: directorate.stats.rates.adjusted_compliance.staff,
      all_total: directorate.stats.services.all.total,
      all_live: directorate.stats.services.all.live,
      all_live_compliant: directorate.stats.services.all.live_compliant,
      all_live_not_compliant: directorate.stats.services.all.live_not_compliant,
      all_not_live: directorate.stats.services.all.not_live,
      all_critical: directorate.stats.services.all.critical,
      all_sunsetting: directorate.stats.services.all.sunsetting,
      all_compliant: directorate.stats.services.all.compliant,
      all_risk_very_high: directorate.stats.services.all.risk_very_high,
      all_risk_high: directorate.stats.services.all.risk_high,
      all_risk_medium: directorate.stats.services.all.risk_medium,
      all_risk_unknown: directorate.stats.services.all.risk_unknown,
      all_no_plans: directorate.stats.services.all.no_plans,
      citizen_total: directorate.stats.services.citizen.total,
      citizen_live: directorate.stats.services.citizen.live,
      citizen_live_compliant: directorate.stats.services.citizen.live_compliant,
      citizen_live_not_compliant: directorate.stats.services.citizen.live_not_compliant,
      citizen_not_live: directorate.stats.services.citizen.not_live,
      citizen_critical: directorate.stats.services.citizen.critical,
      citizen_sunsetting: directorate.stats.services.citizen.sunsetting,
      citizen_compliant: directorate.stats.services.citizen.compliant,
      citizen_risk_very_high: directorate.stats.services.citizen.risk_very_high,
      citizen_risk_high: directorate.stats.services.citizen.risk_high,
      citizen_risk_medium: directorate.stats.services.citizen.risk_medium,
      citizen_risk_unknown: directorate.stats.services.citizen.risk_unknown,
      citizen_no_plans: directorate.stats.services.citizen.no_plans,
      staff_total: directorate.stats.services.staff.total,
      staff_live: directorate.stats.services.staff.live,
      staff_live_compliant: directorate.stats.services.staff.live_compliant,
      staff_live_not_compliant: directorate.stats.services.staff.live_not_compliant,
      staff_not_live: directorate.stats.services.staff.not_live,
      staff_critical: directorate.stats.services.staff.critical,
      staff_sunsetting: directorate.stats.services.staff.sunsetting,
      staff_compliant: directorate.stats.services.staff.compliant,
      staff_risk_very_high: directorate.stats.services.staff.risk_very_high,
      staff_risk_high: directorate.stats.services.staff.risk_high,
      staff_risk_medium: directorate.stats.services.staff.risk_medium,
      staff_risk_unknown: directorate.stats.services.staff.risk_unknown,
      staff_no_plans: directorate.stats.services.staff.no_plans
    })
  })
  wsOverview.getRow(1).font = { size: 12, bold: true }
  console.log('Excel:'.yellow, 'Directorates saved: '.cyan, tabName)
  return workbook
}

module.exports = generateDirectoratesWorksheet
