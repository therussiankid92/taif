#!/usr/bin/env node

/** this class represents the command that the whole module exports, and it is meant to handle all the arguments the command might have **/
const testExec = require("../lib/index");

/** We get arguments after first two elements in process.argv **/
var arguments = process.argv.splice(2);


/**  we intialize the driver of the automation technology **/
let driver = '';

/**  check if first argument is `--params` and assign the argument as the automation technology **/
if (arguments[0] === '--params'){
 driver = arguments[1];
}

/**  having set the automation technology, we initalize the general browserInteractions with the automation technology, and the general runner **/
let browserInteractions = testExec.browserInteractions;
browserInteractions.setDriver(driver);
testExec.run(driver);


