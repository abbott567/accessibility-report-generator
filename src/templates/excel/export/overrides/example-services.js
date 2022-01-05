const PDU = require('../../../../model/constructors/PDU')

function overrideServices (services) {
  services.forEach(service => {
    if (service.slug === 'example-service-1') {
      // Overriding the PDU and directorate in the excel sheet
      const newPDU = PDU.findBySlug('example-pdu-1')
      const newDirectorate = newPDU.getDirectorate()
      service.PDUID = newPDU.id
      service.directorateID = newDirectorate.id
    }
  })
  return services
}

module.exports = overrideServices
