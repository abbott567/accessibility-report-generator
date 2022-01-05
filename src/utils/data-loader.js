const requireDir = require('require-dir')

function loadData (param) {
  const env = param || process.env.NODE_ENV
  let orgData
  if (env === 'test') {
    orgData = requireDir('../../test/data', { recurse: true })
  } else {
    orgData = requireDir('../data', { recurse: true })
  }
  return orgData
}

module.exports = loadData
