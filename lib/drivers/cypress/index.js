const cypress = require('cypress')

const path = require('path')
const browserImplementation = require('./browser-imp')
const frameworkImplementationLocation = path.join('./','tests/wdio');

/** Exporting the wdio browser actions implementation, and the way to run with the wdio automation tech. **/

module.exports = {

    browserImplementation: browserImplementation,
    run(personalizedConfPath) {
        cypress.run({
            browser: 'chrome',
            pluginsFile: path.join(__dirname, '/conf.js'),
            config: {
                video: false,
                ignoreTestFiles:'*.js',
                testFiles: '**/*.feature',
                reporter: 'junit',
                integrationFolder: frameworkImplementationLocation + '/features/',
            }
        })
    }
}
