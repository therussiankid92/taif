const Launcher =  require('@wdio/cli').default;
const path = require('path')
const browserImplementation = require('./browser-imp')


/** Exporting the wdio browser actions implementation, and the way to run with the wdio automation tech. **/

module.exports = {

    browserImplementation: browserImplementation,
    run (personalizedConfPath) {
        let wdio;
        let options = {};

        /** If there is no personalizedConfPath, use the default config from conf.js**/
        if (personalizedConfPath == undefined) {
             wdio = new Launcher(path.join(__dirname, './conf'), options)
        }
        /** If there is personalizedConfPath, use the config file from the provided location**/
        else {
            wdio = new Launcher(path.join('./', personalizedConfPath), options)
        }
        wdio.run().then((code) => {
            process.exit(code)
        }, (error) => {
            console.error('Launcher failed to start the test', error.stacktrace)
            process.exit(1)
        })
    }
}
