const Nunjucks = require('nunjucks')
const nunjucks = new Nunjucks.Environment(
  new Nunjucks.FileSystemLoader([
    'src/templates/email'
  ]),
  { autoescape: true, noCache: true }
)

module.exports = nunjucks
