var chalk = require('chalk')

// console.log = console.info => stdout
// console.warn = console.error => stderr

var LEVELS = {
  debug: { color: 'cyan', fn: console.log },
  info: { color: 'blue', fn: console.info },
  warn: { color: 'yellow', fn: console.warn },
  error: { color: 'red', fn: console.info }
}

var logger = Object.create({
  addLevel: function (name, color, fn) {
    this[name] = log.bind(null, name, color, fn || console.log)
  }
})

for (var level in LEVELS)
  logger.addLevel(level, LEVELS[level].color, LEVELS[level].fn)

function log (name, color, fn, msg) {
  var date = new Date()

  fn.apply(
    null,
    [
      chalk.underline[color](name) + pad(name, 5),
      chalk.gray(date.toLocaleTimeString())
    ].concat(
      Array.prototype.slice.call(arguments, 3)
    )
  )
}

function pad (str, n) {
  var blank = ''
  var i = n - str.length
  while (i-- > 0) blank += ' '
  return blank
}

module.exports = logger
