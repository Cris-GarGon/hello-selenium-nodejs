#!/usr/bin/env node
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function hello(){
	let driver = await new Builder()
		.forBrowser('firefox').build();
	await driver.get('https://www.stackoverflow.com/');

    await driver.findElement(By.name('q')).sendKeys('selenium', Key.RETURN);
    //let qs = await driver.findElements(By.className('question-summary'));
    let qs = await driver.wait(until.elementsLocated(By.className('question-summary')));
    for(let element of qs){

        let titleElement = await element.findElement(By.className('question-hyperlink'));
        let descElement = await element.findElement(By.className('except'));
        let userElement = await element.findElement(By.css('.user-details a'));

        let title = await titleElement.getText();
        let link = await titleElement.getAttribute("href");
        let desc = await descElement.getText();
        let user = await userElement.getText();


        console.log(title + " --> " + user + " --> " + link);
    }

    console.log(qs);
})();