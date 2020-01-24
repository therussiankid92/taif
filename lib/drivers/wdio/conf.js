const path = require('path');
const fs = require('fs');
/** this is the configuration file needed to run wdio **/

const frameworkImplementationLocation = path.join('./','');
const frameworkGeneratedFilesLocation = path.join(frameworkImplementationLocation,'target');

global.downloadDir = path.join(frameworkGeneratedFilesLocation, 'tempDownload');

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: [path.join(frameworkImplementationLocation, 'features/*.feature'), path.join(frameworkImplementationLocation, 'features/*/*.feature')],
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
    },
    onPrepare: function (config, capabilities) {
    if (!fs.existsSync(downloadDir)) {
        fs.mkdirSync(downloadDir);
        }
    },
    onComplete: function () {
        rmdir(downloadDir)
        }
    };

function rmdir(dir)
{
    var list = fs.readdirSync(dir);
    for (var i = 0; i < list.length; i++) {
        var filename = path.join(dir, list[i]);
        var stat = fs.statSync(filename);

        if (filename == "." || filename == "..") {
        } else if (stat.isDirectory()) {
            rmdir(filename);
        } else {
            fs.unlinkSync(filename);
        }
    }
    fs.rmdirSync(dir);
}
