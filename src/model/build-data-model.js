const Org = require('./constructors/Org')
const Directorate = require('./constructors/Directorate')
const PDU = require('./constructors/PDU')
const Service = require('./constructors/Service')

const dataLoader = require('../utils/data-loader.js')

function buildDataModel (params) {
  const orgData = dataLoader(params)

  /* istanbul ignore if */
  if (orgData.info === undefined) throw Error('Could not load info.js for Org')
  const org = new Org(orgData.info)
  org.save()

  const dirKeys = Object.keys(orgData.directorates)
  dirKeys.forEach(d => {
    const directorateData = orgData.directorates[d]
    /* istanbul ignore if */
    if (directorateData.info === undefined) throw Error(`Could not load info.js for Directorate in Org: ${orgData.info.name}`)
    directorateData.info.orgID = org.id
    const directorate = new Directorate(directorateData.info)
    directorate.save()

    const fnKeys = Object.keys(directorateData.pdus)
    fnKeys.forEach(p => {
      const pduData = directorateData.pdus[p]
      /* istanbul ignore if */
      if (pduData.info === undefined) throw Error(`Could not load info.js for PDU in Directorate: ${directorateData.info.name}`)
      pduData.info.directorateID = directorate.id
      pduData.info.orgID = org.id
      const pdu = new PDU(pduData.info)
      pdu.save()

      const serKeys = Object.keys(pduData.services)
      serKeys.forEach(s => {
        const serviceData = pduData.services[s]
        /* istanbul ignore if */
        if (serviceData.info === undefined) throw Error(`Could not load info.js for Service in PDU: ${pduData.info.name}`)
        serviceData.info.directorateID = pdu.directorateID
        serviceData.info.PDUID = pdu.id
        serviceData.info.orgID = org.id
        const thisService = new Service(serviceData.info)
        thisService.save()
      })
    })
  })
  return { Org, Directorate, PDU, Service }
}

module.exports = buildDataModel
