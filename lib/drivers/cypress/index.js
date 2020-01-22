const path = require('path')
const And = require('cypress-cucumber-preprocessor/steps').and
const Given = require('cypress-cucumber-preprocessor/steps').given
const Then = require('cypress-cucumber-preprocessor/steps').then
const When = require('cypress-cucumber-preprocessor/steps').when
const cypress = require('cypress')

const browserImplementation = require('./browser-imp')
const frameworkImplementationLocation = path.join('./','tests/wdio');
const stepDefinitionLocation = path.join(frameworkImplementationLocation, '/steps/')

/** Exporting the wdio browser actions implementation, and the way to run with the wdio automation tech. **/

module.exports = {

    browserImplementation: browserImplementation,
    run(personalizedConfPath) {
        cypress.run({
            browser: 'chrome',
            config: {
                video: false,
                ignoreTestFiles:'*.js',
                testFiles: '**/*.feature',
                pluginsFile: path.join(__dirname, '/conf.js'),
                reporter: 'junit',
                integrationFolder: frameworkImplementationLocation + '/features/',
            }
        })
    },
    Given : Given,
    When : When,
    Then: Then,
    And: And

}

