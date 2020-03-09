const fs = require('fs')

module.exports = (pathToLambda, data) => {
  replaceNameInFile(`${pathToLambda}/package.json`, '{{name}}', data.name)
  replaceNameInFile(`${pathToLambda}/serverless.json`, '{{name}}', data.name)
  replaceNameInFile(`${pathToLambda}/serverless.json`, '{{method}}', data.method)
  replaceNameInFile(`${pathToLambda}/serverless.json`, '{{path}}', data.path)
}

function replaceNameInFile (fileName, oldName, newName) {
  const oldNameRegex = new RegExp(oldName, 'g')
  if (fs.existsSync(fileName)) {
    const file = fs.readFileSync(fileName, 'utf8')
    fs.writeFileSync(fileName, file.replace(oldNameRegex, newName), 'utf8')
  }
}
