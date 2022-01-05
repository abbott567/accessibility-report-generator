const Nunjucks = require('nunjucks')
const nunjucks = new Nunjucks.Environment(
  new Nunjucks.FileSystemLoader([
    'src/templates/report',
    'node_modules/govuk-frontend'
  ]),
  { autoescape: true, noCache: true }
)
nunjucks.addFilter('isNaN', num => {
  if (isNaN(num)) return true
  return false
})

nunjucks.addFilter('generateStatsSectionData', require('../components/stats-section/filter'))
nunjucks.addFilter('prettify', string => {
  if (string === 'compliant') return 'compliant'
  if (string === 'very-high') return 'very high risk'
  if (string === 'high') return 'high risk'
  if (string === 'medium') return 'medium risk'
  if (string === 'unknown') return 'unknown risk'
  if (string === 'not-live') return 'not live'
  if (string === 'not-done') return 'not done'
  if (string === 'citizen') return 'citizen facing'
  if (string === 'staff') return 'staff facing'
  else return string
})

module.exports = nunjucks
