const cypress = require('cypress')

const path = require('path')
const browserImplementation = require('./browser-imp')


/** Exporting the wdio browser actions implementation, and the way to run with the wdio automation tech. **/

module.exports = {

    browserImplementation: browserImplementation,
    run (personalizedConfPath) {
        cypress.open();

}
}
