const fs = require('fs')

module.exports = (pathToTool, pathToLayer, name) => {
  fs.copyFileSync(`${pathToTool}/data/nodejs/package.json`, `${pathToLayer}/nodejs/package.json`)
  fs.copyFileSync(`${pathToTool}/data/serverless.json`, `${pathToLayer}/serverless.json`)
}
