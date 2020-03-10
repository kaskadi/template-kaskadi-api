const fs = require('fs')
const checkArgs = require('./helpers/check-args.js')
const getArgs = require('./helpers/get-args.js')
const copyFiles = require('./helpers/copy-files.js')
const updateFiles = require('./helpers/update-files.js')
const appendLayer = require('./helpers/append-layer.js')

const args = process.argv.slice(2)
checkArgs(args)
const data = getArgs(args)
const pathToTool = 'tools/add-layer'
const pathToLayer = `layers/${data.name}`
fs.mkdirSync(pathToLayer)
fs.mkdirSync(`${pathToLayer}/nodejs`)
copyFiles(pathToTool, pathToLayer, data.name)
updateFiles(pathToLayer, data)
appendLayer(pathToLayer, data.name)
