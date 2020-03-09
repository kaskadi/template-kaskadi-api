const fs = require('fs')

module.exports = () => {
  const pjson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  return pjson.version
}
