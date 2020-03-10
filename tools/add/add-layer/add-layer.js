const fs = require('fs')
const checkArgs = require('../helpers/check-args.js')
const getArgs = require('../helpers/get-args.js')
const createFolders = require('../helpers/create-folders.js')
const copyFiles = require('../helpers/copy-files.js')
const updateFiles = require('../helpers/update-files.js')
const appendLayer = require('../helpers/append.js')

const args = process.argv.slice(2)
checkArgs({
  argsName: ['name'],
  semIndex: ['first']
}, args)
const data = getArgs(['name'], args)
const pathToTool = 'tools/add/add-layer'
const pathToLayer = `layers/${data.name}`
createFolders([pathToLayer, `${pathToLayer}/nodejs`])
copyFiles([
  {
    src: `${pathToTool}/data/nodejs/package.json`,
    dest: `${pathToLayer}/nodejs/package.json`
  },
  {
    src: `${pathToTool}/data/serverless.json`,
    dest: `${pathToLayer}/serverless.json`
  }
])
updateFiles([
  {
    path: `${pathToLayer}/nodejs/package.json`,
    placeholder: '{{name}}',
    value: data.name
  },
  {
    path: `${pathToLayer}/serverless.json`,
    placeholder: '{{name}}',
    value: data.name
  }
])
appendLayer({
  prop: 'layers',
  key: data.name,
  path: pathToLayer
})
