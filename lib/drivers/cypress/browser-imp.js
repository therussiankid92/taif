const cypress = require('cypress')

class CypressBrowserImplementation {

    /** This class implements all the methods exposed to outside of the module by BrowserInteractions by calling directly the automation technology
    which in this case is wdio **/

    
    findElement(elementIdentifier)
    {
        cypress.get("[name=btnK]");
    }

    findElements(elementsIdentifier)
    {
        console.log("Method Not Implemented Yet in Cypress.")
    }
    openUrl(url) {
        cypress.visit(url);
    }

    getUrl(){
        console.log("Method Not Implemented Yet in Cypress.")
    }

    fillElement(idElement,text) {
        console.log("Method Not Implemented Yet in Cypress.")
    }

    click(idElement) {
        console.log("Method Not Implemented Yet in Cypress.")
    }

    clickUsingJavaScript(idElement) {
        // use just when you have tried any other solution out there, and they fail!
        console.log("Method Not Implemented Yet in Cypress.")
    }

    closeBrowser() {
        console.log("Method Not Implemented Yet in Cypress.")
    }

    elementExists(element){
        console.log("Method Not Implemented Yet in Cypress.")
    }

    elementVisible(element){
        cypress.element.should("be.visible")
    }

    numberOfItems(element, num){
        console.log("Method Not Implemented Yet in Cypress.")
    }

    morethanOneItem(element){
        console.log("Method Not Implemented Yet in Cypress.")
    }

    wait(time)
    {
        console.log("Method Not Implemented Yet in Cypress.")
    }

    waitForElement(elem, time) {
        console.log("Method Not Implemented Yet in Cypress.")
    }
    waitForElementDisplayed(element) {
        console.log("Method Not Implemented Yet in Cypress.")
    }
    waitForElementClickable(element) {
        console.log("Method Not Implemented Yet in Cypress.")
    }
    waitForElementEnabled(element) {
        console.log("Method Not Implemented Yet in Cypress.")
    }
    waitForElementExists(element){
        console.log("Method Not Implemented Yet in Cypress.")
    }

    checkApiMethodAndStatusCode(requestOrderNumber, method, url, code){
        console.log("Method Not Implemented Yet in Cypress.")
    }


    checkApiRequestUrl (requestOrderNumber, url)
    {
        console.log("Method Not Implemented Yet in Cypress.")
    }

    checkApiResponseStatusCode(method, url, code){
        console.log("Method Not Implemented Yet in Cypress.")
    }

    checkUrlContainsPath(pathToBeContained){
        console.log("Method Not Implemented Yet in Cypress.")
    }
    scrollUntilElement(element){
        console.log("Method Not Implemented Yet in Cypress.")
    }
    selectIndexOfElement(element,index){
        console.log("Method Not Implemented Yet in Cypress.")
    }
    pressKeys(keys) {
        console.log("Method Not Implemented Yet in Cypress.")
    }

    setCookie(cookieName,cookieValue) {
        console.log("Method Not Implemented Yet in Cypress.")
    }
}

module.exports = CypressBrowserImplementation


