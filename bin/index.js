#!/usr/bin/env node


const testExec = require("../lib/index");

// get arguments after first two elements in process.argv
var arguments = process.argv.splice(2);

// check if first argument is `--params`
let driver = '';
if (arguments[0] === '--params'){
 driver = arguments[1];
}



let browserInteractions = testExec.browserInteractions;
browserInteractions.setDriver(driver);

testExec.run(driver);


