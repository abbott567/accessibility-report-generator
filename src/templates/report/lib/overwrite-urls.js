const cheerio = require('cheerio')

function overwriteURLs (html, page) {
  const $ = cheerio.load(html)
  $('a').each(function () {
    const link = $(this).attr('href')
    const isNotJumpLink = !link.match(/#/)
    const isNotInternetLink = !link.match(/http/)
    const isNotEmailLink = !link.match(/mailto/)
    const isRootURL = link === '/'
    if (isRootURL) {
      let newLink = ''
      if (page === 'root') {
        newLink = link.replace(/\//, 'index.html')
        return $(this).attr('href', newLink)
      } else if (page === 'level1') {
        newLink = link.replace(/\//, '../index.html')
        return $(this).attr('href', newLink)
      } else if (page === 'level2') {
        newLink = link.replace(/\//, '../../index.html')
      }
      return $(this).attr('href', newLink)
    }

    if (isNotJumpLink && isNotInternetLink && isNotEmailLink) {
      if (page === 'root') {
        const newLink = link.replace(/\//, '')
        return $(this).attr('href', newLink + '/index.html')
      } else if (page === 'level1') {
        let newLink = ''
        const linkWithoutFirstSlash = link.replace(/\//, '')
        newLink = '../' + linkWithoutFirstSlash
        return $(this).attr('href', newLink + '/index.html')
      } else if (page === 'level2') {
        let newLink = ''
        const linkWithoutFirstSlash = link.replace(/\//, '')
        newLink = '../../' + linkWithoutFirstSlash
        return $(this).attr('href', newLink + '/index.html')
      }
    }
  })
  return $.html()
}

module.exports = overwriteURLs
