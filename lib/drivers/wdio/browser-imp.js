const assert = require('assert');

class WdioBrowserImplementation {

    /** This class implements all the methods exposed to outside of the module by BrowserInteractions by calling directly the automation technology
    which in this case is wdio **/

    constructor() {
        this.min_time = 500
        this.medium_time = 4000
        this.long_time = 8000
    }
    
    findElement(elementIdentifier)
    {
        return $(elementIdentifier)
    }

    findElements(elementsIdentifier)
    {
        return $$(elementsIdentifier)
    }
    openUrl(url) {
        browser.url(url);
        browser.setupInterceptor();
    }

    fillElement(idElement,text) {
        idElement.setValue(text)
    }

    click(idElement) {
        idElement.click()
    }

    closeBrowser() {
        browser.quit();
    }

    elementExists(element){
        return element.isExisting()
    }

    numberOfItems(element, num){
        return element.$$.length === num
    }

    morethanOneItem(element){
        const num = 0
        return element.$$.length > num
    }

    waitForElement(elem, time) {
        elem.waitForExist(time)
    }
    waitForElementDisplayed(element) {
        element.waitForDisplayed()
    }
    waitForElementClickable(element) {
        element.waitForClickable()
    }
    waitForElementEnabled(element) {
        element.waitForEnabled()
    }
    checkApiResponseStatusCode(requestOrderNumber, timeToWaitForRequest, method, url, code){
        browser.pause(timeToWaitForRequest);
        let request = browser.getRequest(requestOrderNumber);
        assert.equal(request.method, method);
        assert(request.url.includes(url));
        assert.equal(request.response.statusCode, code);
    }


}

module.exports = WdioBrowserImplementation


