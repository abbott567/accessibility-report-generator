const Directorate = require('../../../model/constructors/Directorate')

function generateNavigationData () {
  const nav = {
    main: [],
    filters: [],
    support_links: []
  }

  // Overview
  nav.main.push({
    name: 'Overview',
    link: '/',
    children: []
  })

  // // Directorates
  Directorate.all.forEach(directorate => {
    const pdus = directorate.getPDUs()
    const children = []
    pdus.forEach(pdu => {
      children.push({
        name: pdu.name,
        link: `/${directorate.slug}/${pdu.slug}`
      })
    })
    nav.main.push({
      name: directorate.name,
      link: `/${directorate.slug}`,
      children
    })
  })

  // Filters
  nav.filters.push({
    name: 'Compliant services',
    link: '/filters/compliant-services'
  })
  nav.filters.push({
    name: 'Very high risk services',
    link: '/filters/very-high-risk-services'
  })
  nav.filters.push({
    name: 'High risk services',
    link: '/filters/high-risk-services'
  })
  nav.filters.push({
    name: 'Medium risk services',
    link: '/filters/medium-risk-services'
  })
  nav.filters.push({
    name: 'Unknown risk services',
    link: '/filters/unknown-risk-services'
  })
  nav.filters.push({
    name: 'Citizen facing services',
    link: '/filters/citizen-facing-services'
  })
  nav.filters.push({
    name: 'Staff facing services',
    link: '/filters/staff-facing-services'
  })
  nav.filters.push({
    name: 'Critical services',
    link: '/filters/critical-services'
  })
  nav.filters.push({
    name: 'Sunsetting services',
    link: '/filters/sunsetting-services'
  })
  nav.filters.push({
    name: 'No plans for compliance',
    link: '/filters/no-plans-for-compliance'
  })

  // Support links
  nav.support_links.push({
    name: 'Accessibility statement',
    link: '/accessibility-statement'
  })

  nav.support_links.push({
    name: 'Next steps for this report',
    link: '/next-steps-for-this-report'
  })
  nav.support_links.push({
    name: 'Sitemap',
    link: '/sitemap'
  })

  return nav
}

module.exports = generateNavigationData()
