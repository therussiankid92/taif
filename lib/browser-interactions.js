const wdio = require('./drivers/wdio');
const cypress = require('./drivers/cypress');
const fs = require('fs');
const path = require('path');

/** The BrowserInteractions class exports all the methods that can be called from outside of the module. As you can see, these are technology independent.
  The  technology is selected in the getTestAutomationTechnology function**/


/** We get the requested automation technology in order to be able to select the proper browser actions implementation  **/
function getTestAutomationTechnology(driver) {
    switch (driver) {
        case 'wdio':
            return wdio.browserImplementation;
        case "cypress":
            return cypress.browserImplementation;

    }
}

class BrowserInteractions {

    constructor(driver = 'wdio') {
        this.setDriver(driver)
    }

 /** We get the requested technology and initalize the driver to load the proper browser implementation class of that automation technology **/
    setDriver(driver) {
        const BrowserInteractionsImplementation = getTestAutomationTechnology(driver)
        this.driver = new BrowserInteractionsImplementation()
    }

  /** The implementation of this class in a certain automation technology initalized as the driver is called inside the method **/
    findElement(elementIdentifier)
    {
        return this.driver.findElement(elementIdentifier)
    }

    findElements(elementsIdentifier)
    {
        return this.driver.findElements(elementsIdentifier)
    }

    openUrl(url) {
        this.driver.openUrl(url)
    }

    getUrl(){
        return this.driver.getUrl()
    }

    fillElement(idElement,text) {
        this.driver.fillElement(idElement, text)
    }

    click(idElement) {
        this.driver.click(idElement)
    }

    clickUsingJavaScript(idElement) {
        this.driver.clickUsingJavaScript(idElement)
    }

    closeBrowser() {
        this.driver.closeBrowser()
    }

    elementExists(element){
        this.driver.elementExists(element)
    }

    elementVisible(element){
        this.driver.elementVisible(element)
    }

    numberOfItems(element, num){
        this.driver.numberOfItems(element, num)
    }

    morethanOneItem(element){
       this.driver.moreThanOneItems(element)
    }

    waitForElement(elem, time) {
        this.driver.waitForElement(elem, time)
    }
    waitForElementDisplayed (element)
    {
        this.driver.waitForElementDisplayed(element)
    }
    waitForElementClickable (element)
    {
        this.driver.waitForElementClickable(element)
    }
    waitForElementEnabled (element)
    {
        this.driver.waitForElementEnabled(element)
    }

    waitForElementExists(element){
        this.driver.waitForElementExists(element)
    }

    waitForElementNotExists(element){
    this.driver.waitForElementNotExists(element)
    }

    checkApiResponseStatusCode(method, url, code) {
        this.driver.checkApiResponseStatusCode(method,url,code)
    }
    checkUrlContainsPath (pathToBeContained){
        this.driver.checkUrlContainsPath(pathToBeContained)
    }
    wait (time) {
        this.driver.wait(time)
    }
    scrollUntilElement(element){
        this.driver.scrollUntilElement(element)
    }
    selectIndexOfElement(element,index){
        this.driver.selectIndexOfElement(element,index)

    }
    pressKeys(keys){
        this.driver.pressKeys(keys)
    }
    setCookie(cookieName, cookieValue) {
        this.driver.setCookie(cookieName,cookieValue)
    }

    uploadFileWhenUploadInputNotDisplayed(inputClass, filePath){
      this.driver.uploadFileWhenUploadInputNotDisplayed(inputClass, filePath);
    }

   waitForFileExists(filePath, timeout=10000) {
    return new Promise(function (resolve, reject) {

      var timer = setTimeout(function () {
        watcher.close();
        reject(new Error('File did not exists and was not created during the timeout.'));
      }, timeout);

      fs.access(filePath, fs.constants.R_OK, function (err) {
        if (!err) {
          clearTimeout(timer);
          watcher.close();
          resolve();
        }
      });

      var dir = path.dirname(filePath);
      var basename = path.basename(filePath);
      var watcher = fs.watch(dir, function (eventType, filename) {
        if (eventType === 'rename' && filename === basename) {
          clearTimeout(timer);
          watcher.close();
          resolve();
        }
      });
    });
  }
}

module.exports = new BrowserInteractions()
