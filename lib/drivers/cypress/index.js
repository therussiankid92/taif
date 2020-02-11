const cypress = require('cypress')

const browserImplementation = require('./browser-imp')

/** Exporting the cypress browser actions implementation, and the way to run with the cypress automation tech. **/

module.exports = {
    cypress: cypress,
    browserImplementation: browserImplementation,
    run(personalizedConfPath) {
        cypress.run({
            browser: 'chrome',
            config: {
                video: false,
                reporter: 'junit',
            }
        })
    },

}

