// 'use strict';
var cucumber = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var reporter = require('cucumber-html-reporter');
var cucumberReportDirectory = 'reports/protractor_reports';
var jsonReportFile = cucumberReportDirectory + '/cucumber_report.json';
var propertiesReader = require('properties-reader');
var currentDate = new Date();
var date = ("0" + currentDate.getDate()).slice(-2) + '_' + ("0" + (currentDate.getMonth() + 1)).slice(-2) + '_' + ("" + (currentDate.getFullYear())).slice(-2) + '_' + ("0" + (currentDate.getHours() + 1)).slice(-2) + '_' + ("0" + (currentDate.getMinutes() + 1)).slice(-2) + '_' + ("0" + (currentDate.getSeconds() + 1)).slice(-2);


exports.config = {

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./resource/feature/*.feature'],
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: 'chrome'
        // browserName: 'firefox'
        // browserName: 'internet explorer'
    },

    // multiCapabilities: [
    //     {
    //         browserName: 'chrome'
    //     },
    //     // {
    //     //     browserName: 'firefox'
    //     // },
    //     {
    //         browserName: 'internet explorer'
    //     }
    // ],

    cucumberOpts: {
        require: ['./resource/*.*.js'],
        // features: ["./feature/*.feature"],
        // tags: '@BankManagerLogin or @CustomerLogin or @BankManagerDelete',
        // // strict: true,
        format: ['node_modules/cucumber-pretty'],
        format: 'json:./' + jsonReportFile,
        defaultTimeoutInterval: 30000,

    },
    // SELENIUM_PROMISE_MANAGER: false,
    // plugins: [{
    //     package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    //     options: {
    //         // read the options part
    //         automaticallyGenerateReport: true,
    //     }
    // }],

    onPrepare: function () {
        browser.manage().window().maximize();
        global.Given = cucumber.Given;
        global.When = cucumber.When;
        global.Then = cucumber.Then;
        global.And = cucumber.And;
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.prop = propertiesReader('./test.properties');

        var fs = require('fs-extra');

        fs.emptyDir('reports/screenshots/', function (err) {
            console.log(err);
        });
    //    var sourceFile = fs.readFileSync('reports/cucumberReportDirectory/');
    //    console.log("sdf:"+sourceFile);
        
        // fs.copyFile(sourceFile, 'reports/cucumberReportDirectory/oldReports/'+destinationFile, function (err) {
        //     console.log(err);
        // });
    },

    onComplete: function () {
        var options = {
            strict: true,
            theme: 'bootstrap',
            jsonFile: jsonReportFile,
            output: 'reports/cucumberReportDirectory' + '/test_report' + '_' + date + '/test_report' + '_' + date + '.html',
            // output: 'reports/cucumberReportDirectory' + '/test_report' + '_' + date + '.html',
            screenshotsDirectory: 'reports/screenshots/',
            storeScreenshots: true,
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            scenarioTimestamp: true,
            ignoreBadJsonFile: true,
            metadata: {
                "App Version": "0.3.2",
                "Author": "Shagun Mahajan",
                "Test Environment": "QA",
                "Browser": this.capabilities.browserName,
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            },
        };

        reporter.generate(options);

    }
}