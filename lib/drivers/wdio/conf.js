//const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
const route = 'tests/wdio';
const targetDir = 'tests/wdio/target'
exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: [route + '/features/*.feature'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'zal:recordVideo': true,
            'zal:name': 'Demo Integration Tests',
            'zal:build': 'WebDriverIO',
        },
    ],
    logLevel: 'trace',
    outputDir: targetDir + '/test-report/output',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'dot',
        'spec',
        [
            'allure',
            {
                outputDir: targetDir + '/test-report/allure-result/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
        // ['timeline', { outputDir: targetDir + '/test-report/timeline' }],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: [route + '/steps/*.steps.js'],
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
    services: [
        //   [TimelineService],
        // Uncomment to run tests with Selenium Standalone, if you have JDK installed.
        // ['selenium-standalone'],
    ],
    beforeSession() {
        browser.reloadSession()

    },
    before()
    {
        browser.setWindowSize(1920, 1080);z
    }
};
