global.owner = ['6282252655313']
global.mods = ['6282252655313']
global.prems = ['6282252655313']
global.packname = 'ŠĞĎČ-BØŤ'
global.author = 'M AFDHAN'



let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
