const assert = require('assert');

class CypressBrowserImplementation {

    /** This class implements all the methods exposed to outside of the module by BrowserInteractions by calling directly the automation technology
    which in this case is wdio **/

    
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

    clickUsingJavaScript(idElement) {
        // use just when you have tried any other solution out there, and they fail!
        browser.execute("arguments[0].click();", idElement);
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
    waitForElementExists(element){
        element.isExisting()
    }

    checkApiMethodAndStatusCode(requestOrderNumber, method, url, code){

        let errorMessage = ' found while calling the following endpoint: ' + url
        let exception

        let request
        let returnValue = true
        try {
            request = browser.getRequest(requestOrderNumber);
        }
        catch (e){
            returnValue = false
            exception = e

        }
        try {
            assert.equal(request.method, method);

        } catch (e) {
            returnValue = false
            exception = e
        }

        try {
            assert.equal(request.response.statusCode, code);

        } catch (e) {
            returnValue = false
            exception = e
        }

        if (returnValue === false)
        {
            throw exception + errorMessage
        }
        else return true
    }


    checkApiRequestUrl (requestOrderNumber, url)
    {
      let request = browser.getRequest(requestOrderNumber);
      return request.url.includes(url)
    }

    checkApiResponseStatusCode(method, url, code){
        let maxTimesToRepeat = 10
        let previouslyAnalyzedRequests = 0
        let numberOfCurrentRequests = 0
        let errorMessage = "Request Not found to endpoint: " + url
        let returnedValue = false
        for (let i = 0; i<maxTimesToRepeat; i++)
        {
            if (returnedValue === true) {break;}
            this.wait(2000)
            numberOfCurrentRequests = browser.getRequests().length
            for (let j = previouslyAnalyzedRequests; j<numberOfCurrentRequests; j++){
                if (returnedValue === true) {break;}
                    if (this.checkApiRequestUrl(j, url) === true){
                      if(this.checkApiMethodAndStatusCode(j, method, url, code) === true) {
                        returnedValue = true
                    }
                }
                 }
        }
        if (returnedValue !=true){
            throw errorMessage
        }
        else return returnedValue
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
    pressKeys(keys) {
        browser.keys(keys)
    }

    setCookie(cookieName,cookieValue) {
        browser.setCookies([{name: cookieName, value: cookieValue}])
    }
}

module.exports = CypressBrowserImplementation


