require('colors')
const overrideServices = require('../overrides/services')

function generateServicesWorksheet (workbook, Service, tabName) {
  const servicesOriginal = Service.all
  const services = overrideServices(servicesOriginal)
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
    { header: 'WCAG tests', key: 'service_wcag_tests', width: 20 },
    { header: 'Screen reader tests', key: 'service_screen_reader_tests', width: 20 },
    { header: 'Voice controller tests', key: 'service_voice_controller_tests', width: 20 },
    { header: 'Screen magnifier tests', key: 'service_screen_magnifier_tests', width: 20 },
    { header: 'Accessibility Statement', key: 'service_accessibility_statement', width: 20 },
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
      service_wcag_tests: service.evidence.wcag.status,
      service_screen_reader_tests: service.evidence.screen_reader.status,
      service_voice_controller_tests: service.evidence.voice_controller.status,
      service_screen_magnifier_tests: service.evidence.screen_magnifier.status,
      service_accessibility_statement: service.evidence.statement.status,
      service_notes: service.notes.status
    })
  })
  wsOverview.getRow(1).font = { size: 12, bold: true }
  console.log('Excel:'.yellow, 'Services saved: '.cyan, tabName)
  return workbook
}

module.exports = generateServicesWorksheet
