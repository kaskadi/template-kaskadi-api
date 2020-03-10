const fs = require('fs')

module.exports = (pathToLayer, data) => {
  replaceNameInFile(`${pathToLayer}/nodejs/package.json`, '{{name}}', data.name)
  replaceNameInFile(`${pathToLayer}/serverless.json`, '{{name}}', data.name)
}

function replaceNameInFile (fileName, oldName, newName) {
  const oldNameRegex = new RegExp(oldName, 'g')
  if (fs.existsSync(fileName)) {
    const file = fs.readFileSync(fileName, 'utf8')
    fs.writeFileSync(fileName, file.replace(oldNameRegex, newName), 'utf8')
  }
}
