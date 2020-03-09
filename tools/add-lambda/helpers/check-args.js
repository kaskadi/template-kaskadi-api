module.exports = (args) => {
  const displayInfo = {
    argsName: ['name', 'method', 'path'],
    semIndex: ['first', 'second', 'third']
  }
  for (i=0; i < 3; i++) {
    if(!args[i]) {
      console.log(`A ${displayInfo.argsName[i]} is needed as ${displayInfo.semIndex[i]} argument to this function`)
      process.exit(9)
    }
  }
}
