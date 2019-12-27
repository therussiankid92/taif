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

    getUrl(){
        return browser.getUrl()
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

    wait(time)
    {
        browser.pause(time)
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
        this.wait(timeToWaitForRequest);
        let request
        let returnValue = true
        try {
            request = browser.getRequest(requestOrderNumber);
        }
        catch (e){
            throw  e
            returnValue = false
        }
        try {
        assert.equal(request.method, method);

        } catch (e) {
            throw e
            returnValue = false
        }
        try {
            assert(request.url.includes(url));

        } catch (e) {
            throw e
            returnValue = false
        }
        try {
            assert.equal(request.response.statusCode, code);

        } catch (e) {
            throw e
            returnValue = false
        }
        return returnValue

    }
    checkApiResponseStatusCodeSmart(method, url, code){
        let maxTimesToRepeat = 20
        let previouslyAnalyzedRequests = 0
        let numberOfCurrentRequests = 0
        let returnedValue = false
        for (let i = 0; i<maxTimesToRepeat; i++)
        {
            if (returnedValue === true) {break;}
            numberOfCurrentRequests = browser.getRequests().length
            for (let j = previouslyAnalyzedRequests; j<numberOfCurrentRequests; j++){
                if (returnedValue === true) {break;}
                try {
                    if (this.checkApiResponseStatusCode(j, 1000, method, url, code) === true)
                    {
                        returnedValue = true
                    }
                }
                catch (e) {
                    console.log("Request Not Found Yet, Will Try Again")
                }
            }
        }
        return returnedValue
    }

    checkUrlContainsPath(pathToBeContained){
        return assert(this.getUrl().includes(pathToBeContained))
    }
    scrollUntilElement(element){
        element.scrollIntoView()
    }
    selectIndexOfElement(element,index){
        return element.selectByIndex(index)

    }



}

module.exports = WdioBrowserImplementation


