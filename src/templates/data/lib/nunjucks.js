const Nunjucks = require('nunjucks')
const nunjucks = new Nunjucks.Environment(
  new Nunjucks.FileSystemLoader([
    'src/templates/data'
  ]),
  { autoescape: true, noCache: true }
)
const { diff } = require('deep-diff')

nunjucks.addFilter('difference', (input, param1, param2) => {
  const difference = diff(param1, param2)
  return difference
})

module.exports = nunjucks
