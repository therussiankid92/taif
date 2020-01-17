const wdioDriver  = require('./wdio')
const cypressDriver = require('./cypress')

/** the different automation technology implementations are exported **/

exports.wdio = wdioDriver
exports.cypress = cypressDriver
