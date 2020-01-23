# Test Automation Interface - Front

## Purpose
This library has been created in order to simplify the handling of the test automation technology, de-coupling it from the actual test scripts and business-specific test logic, and making it re-usable throughout many projects.

Looking back at the main UI test automation actions from history, we can see they are  mostly the same: click, insert text, drag & drop, read a configuration file, run a suite, etc. Why should one bother to re-write all of that, in every project in order to benefit from the latest test automation technologies?

This library currently only implements this philosophy for  webdriver.io, but it is build to support any other UI automation technology, such as cypress, protractor, etc. 

This project is improvable so if you like it, feel free to contribute and make a PR! We can make test automation a better world! 
## Concepts

### Driver 
Basically the driver is the answer to the question of "which technology will drive my test automation?"
In this case, it can be wdio, cypress, etc.

 
### BrowserInteractions
List of methods that are exposed outside of the module, containing various actions over the browser: click, add text, findElement, etc that would be implemented further on by the automation technology.
You want to call these babies and use them with the appropriate driver. 
Remember, you'll need to have both the interactor and the implementor for this to work.

### BrowserImplementation
Here's where the magic happens, and where the actual test automation tech comes in place: how wdio/cypress/etc actually gives clicks, makes drag & drops, etc.
When adding a new automation technology, you'll need to add one of these, referencing each one of the exposed methods in Browser Interactions.

## How to use
First of all, import the following dependencies in your package.json:

   ```
    "taif": "housfy/taif#master" 
   ```

We use cucumber aswell for our project, because we like BDD:

   ``` 
   "cucumber": "^5.1.0"
   ```


Add the following scripts to your project. You can rename test to anything you like:

   ```  
   "test": "housfy-test --params wdio"
   ```

For wdio, please look at the conf.js: 
- Create your feature files in the path specified in the "specs"
- Link those feature file with the steps placed in the path specified in cucumberOpts / require 
- Write Features & Steps. We recommend you to use a test automation architecture such as page objects for a cleaner test automation solution. 
 Code Example: 
 ```
 import { browserInteractions } from "taif/lib"
  get inputEmail() {
        return browserInteractions.findElement('body #email');
    }
  fillEmail(){
        browserInteractions.fillElement(this.inputEmail, this.getUser.login)
        }
 ``` 
 Additionally: 
 - have a Selenium Grid running at the address and port specified. We use Zalenium for that.   
 - have a babel.config file in the root of your project, if you don't have one already
  ```
 module.exports = {
     presets: [
         [
             '@babel/preset-env',
             {
                 targets: {
                     node: 'current',
                 },
             },
         ],
     ],
 };
  ```
 - ``` npm run test ```
 
 Want to use your on config?
 Pass on your on config file with the following: 
  ``` --personalizedConfPath /tests/wdio/runner/conf.js ```  

## Example Project  
Feel free to download the following example project, to understand how to set it up: https://github.com/therussiankid92/taif-example-cucumber-wdio

