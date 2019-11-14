const Launcher =  require('@wdio/cli').default;
const path = require('path')
const browserInteractions = require('./browser-imp')


module.exports = {

    browserInteractions,
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
