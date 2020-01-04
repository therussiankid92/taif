const path = require('path')

/** this is the configuration file needed to run wdio **/

const frameworkImplementationLocation = path.join('./','tests/wdio');
const frameworkGeneratedFilesLocation = path.join(frameworkImplementationLocation,'target')

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: [path.join(frameworkImplementationLocation, 'features/*.feature')],
    capabilities: [
        {
            browserName: 'chrome',
            'zal:recordVideo': true,
            'zal:build': 'WebDriverIO',
        },
    ],
    logLevel: 'trace',
    outputDir: path.join(frameworkGeneratedFilesLocation, 'test-report/output'),
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec',
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: [path.join(frameworkImplementationLocation, 'steps/*.steps.js')],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    services: ['intercept'],

    beforeSession: function beforeSession(config, capabilities, specs) {
        capabilities['zal:name'] = specs.toString().replace(/.*\/features\//gi, '');
        },
    before()
    {
        browser.reloadSession()
        browser.setWindowSize(1920, 1080);
    }
};
