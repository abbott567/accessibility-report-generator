const path = require('path')
const requireDir = require('require-dir')

function loadData (env) {
  let orgData
  if (env === 'test') {
    orgData = requireDir(path.resolve('test', 'dummy-data'), { recurse: true })
  } else {
    orgData = requireDir(path.resolve('src', 'data'), { recurse: true })
  }
  return orgData
}

module.exports = loadData
