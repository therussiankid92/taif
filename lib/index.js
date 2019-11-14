const { wdio, cypress} = require('./drivers')
const browserInteractions = require('./browser-interactions')

module.exports = {
    browserInteractions,
    run (driver) {
        if (driver === 'wdio') {
            wdio.run()
        }
    }
}
