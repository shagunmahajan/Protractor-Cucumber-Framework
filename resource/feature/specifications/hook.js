var { After, Before } = require('cucumber');
var mainFunction = require('../../pageFunction/pageFunc.js');

// Asynchronous Promise
After(async function (scenario) {
    if (scenario.result.status === 'failed') {
        // console.log("scneaio aj:" + scenario.result.status);
        const screenShot = await browser.takeScreenshot();
        //add downloadable file to report with link
        //this.attach(screenShot, config.config.capabilities.browserName + '-' + result.fullName+"image/png");
        this.attach(screenShot, "image/png");
    }

});

Before(async function (scenario) {
    await mainFunction.navigateTo();

    this.scenario = scenario.pickle.name;
});
