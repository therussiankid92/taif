const Launcher =  require('@wdio/cli').default;
const path = require('path')
const browserImplementation = require('./browser-imp')


/** Exporting the wdio browser actions implementation, and the way to run with the wdio automation tech. **/

module.exports = {

    browserImplementation: browserImplementation,
    run () {
        let opts = {};
        const wdio = new Launcher(path.join(__dirname, './conf'), opts)
        wdio.run().then((code) => {
            process.exit(code)
        }, (error) => {
            console.error('Launcher failed to start the test', error.stacktrace)
            process.exit(1)
        })
    }
}
