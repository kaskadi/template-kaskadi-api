const fs = require('fs')

module.exports = (pathToLambda, name) => {
  let config = JSON.parse(fs.readFileSync('serverless.json', 'utf8'))
  config.functions[snakeToCamel(name)] = `\${file(./${pathToLambda}/serverless.json)}`
  fs.writeFileSync('serverless.json', JSON.stringify(config, null, 2), 'utf8')
}

function snakeToCamel (word) {
  let res = word.charAt(0).toUpperCase()
  for (var i = 1; i < word.length; i++) {
    if (word.charAt(i) === '-') {
      i++
      res += word.charAt(i).toUpperCase()
    } else {
      res += word.charAt(i)
    }
  }
  return res
}
