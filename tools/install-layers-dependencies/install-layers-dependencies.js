const fs = require('fs')
const childProc = require('child_process')
const root = process.cwd()

fs.readdirSync('layers').forEach(layer => {
  process.chdir(`layers/${layer}/nodejs`)
  childProc.execSync('npm i')
  process.chdir(root)
})
