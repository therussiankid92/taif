
const wdio = require('./drivers/wdio');

function getImplementation(driver) {
    switch (driver) {
        case 'wdio':
        default:
            return wdio.browserInteractions
    }
}

class BrowserInteractions {

    constructor(driver = 'wdio') {
        this.min_time = 500
        this.medium_time = 4000
        this.long_time = 8000
        this.setDriver(driver)
    }

    setDriver(driver) {
        const BrowserInteractionsImplementation = getImplementation(driver)
        this.driver = new BrowserInteractionsImplementation()
    }
    

    findElement(elementIdentifier)
    {
        return this.driver.findElement(elementIdentifier)
    }
    openUrl(url) {
        this.driver.openUrl(url)
    }

    fillElement(idElement,text) {
        this.driver.fillElement(idElement, text)
    }

    click(idElement) {
        this.driver.click(idElement)
    }

    closeBrowser() {
        this.driver.closeBrowser()
    }

    elementExists(element){
        this.driver.elementExists(element)
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
}

module.exports = new BrowserInteractions()
