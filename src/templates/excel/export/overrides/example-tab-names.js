require('colors')

function overrideTabNames (tabNames) {
  console.log('Excel:'.yellow, 'Overriding tab names'.yellow)
  tabNames.org = 'Overview'
  tabNames.services = 'Products'
  return tabNames
}

module.exports = overrideTabNames
