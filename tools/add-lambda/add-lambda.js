const copyFiles = require('./helpers/copy-files.js')
const updateFiles = require('./helpers/update-files.js')
const appendLambda = require('./helpers/append-lambda.js')
const checkArgs = require('./helpers/check-args.js')
const getArgs = require('./helpers/get-args.js')

const args = process.argv.slice(2)
checkArgs(args)
const data = getArgs(args)
const pathToTool = 'tools/add-lambda'
const pathToLambda = `lambdas/${data.name}`
fs.mkdirSync(pathToLambda)
copyFiles(pathToTool, pathToLambda, data.name)
updateFiles(pathToLambda, data)
appendLambda(pathToLambda, data.name)
