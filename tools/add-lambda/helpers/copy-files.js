const fs = require('fs')

module.exports = (pathToTool, pathToLambda, name) => {
  fs.copyFileSync(`${pathToTool}/data/handler.js`, `${pathToLambda}/${name}.js`)
  fs.copyFileSync(`${pathToTool}/data/package.json`, `${pathToLambda}/package.json`)
  fs.copyFileSync(`${pathToTool}/data/serverless.json`, `${pathToLambda}/serverless.json`)
}
