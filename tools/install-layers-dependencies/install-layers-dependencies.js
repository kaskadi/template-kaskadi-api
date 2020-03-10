const fs = require('fs')
const childProc = require('child_process')

fs.readdirSync('layers').forEach(layer => {
  childProc.execSync(`cd layers/${layer}/nodejs && npm i && cd ../../../`)
})
