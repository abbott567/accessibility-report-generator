require('colors')
const fs = require('fs-jetpack')

function generateServicesWorksheet (workbook, Service, tabName) {
  let services = Service.all
  const overrideExists = fs.exists('./src/templates/excel/export/overrides/services.js')
  if (overrideExists) {
    console.log('Excel:'.yellow, 'Overriding services data'.yellow)
    const overrideServices = require('../overrides/services')
    services = overrideServices(services)
  }
  const wsOverview = workbook.addWorksheet(tabName)
  wsOverview.columns = [
    { header: 'Name', key: 'service_name', width: 20 },
    { header: 'Aias', key: 'service_alias', width: 20 },
    { header: 'Directorate name', key: 'directorate_name', width: 20 },
    { header: 'PDU name', key: 'pdu_name', width: 20 },
    { header: 'Critical', key: 'service_critical', width: 20 },
    { header: 'Sunsetting', key: 'service_sunsetting', width: 20 },
    { header: 'Compliant', key: 'service_compliant', width: 20 },
    { header: '(%) Progress', key: 'service_progress', width: 20 },
    { header: 'Status', key: 'service_status', width: 20 },
    { header: 'Type', key: 'service_type', width: 20 },
    { header: 'Risk', key: 'service_risk', width: 20 },
    { header: 'Plans for compliance', key: 'service_plans', width: 20 },
    { header: 'Is legacy', key: 'service_legacy', width: 20 },
    { header: 'WCAG tests', key: 'service_wcag_tests', width: 20 },
    { header: 'WCAG tests date', key: 'service_wcag_tests_date', width: 20 },
    { header: 'Screen reader tests', key: 'service_screen_reader_tests', width: 20 },
    { header: 'Screen reader tests date', key: 'service_screen_reader_tests_date', width: 20 },
    { header: 'Voice controller tests', key: 'service_voice_controller_tests', width: 20 },
    { header: 'Voice controller tests date', key: 'service_voice_controller_tests_date', width: 20 },
    { header: 'Screen magnifier tests', key: 'service_screen_magnifier_tests', width: 20 },
    { header: 'Accessibility Statement', key: 'service_accessibility_statement', width: 20 },
    { header: 'Accessibility Statement date', key: 'service_accessibility_statement_date', width: 20 },
    { header: 'In Scope', key: 'service_in_scope', width: 20 },
    { header: 'Notes', key: 'service_notes', width: 20 }
  ]
  services.forEach(service => {
    wsOverview.addRow({
      service_name: service.name,
      service_alias: service.alias,
      directorate_name: service.getDirectorate().name,
      pdu_name: service.getPDU().name,
      service_critical: service.critical,
      service_sunsetting: service.sunsetting,
      service_compliant: service.risk === 'compliant' ? 'true' : 'false',
      service_progress: service.stats.progress,
      service_status: service.status,
      service_type: service.type,
      service_risk: service.risk,
      service_plans: service.plans,
      service_legacy: service.legacy,
      service_wcag_tests: service.evidence.wcag.status,
      service_wcag_tests_date: service.evidence.wcag.date,
      service_screen_reader_tests: service.evidence.screen_reader.status,
      service_screen_reader_tests_date: service.evidence.screen_reader.date,
      service_voice_controller_tests: service.evidence.voice_controller.status,
      service_voice_controller_tests_date: service.evidence.voice_controller.date,
      service_screen_magnifier_tests: service.evidence.screen_magnifier.status,
      service_accessibility_statement: service.evidence.statement.status,
      service_accessibility_statement_date: service.evidence.statement.date,
      service_in_scope: (service.plans === 'true' && service.status === 'live') ? 'true' : 'false',
      service_notes: service.notes
    })
  })
  wsOverview.getRow(1).font = { size: 12, bold: true }
  console.log('Excel:'.yellow, 'Services saved: '.cyan, tabName)
  return workbook
}

module.exports = generateServicesWorksheet
