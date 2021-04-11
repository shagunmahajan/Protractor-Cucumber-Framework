# Protractor, Cucumber and Javascript Setup Guide
This is Test Automation framework designed using Protractor, Cucumber and Javascript

## Table of Contents

- [Features/Project Description](#features-project-description)
- [Framework Structure](#framework-structure)
- [Pre-requisites](#pre-requisites)
- [Setup Scripts](#setup-scripts)
- [How to Write Test](#how-to-write-test)
- [How to Run Test](#how-to-run-test)
- [Troubleshooting](#troubleshooting)
- [How to Update local npm packages](#how-to-update-local-npm-packages)
- [Sample Test Results](#sample-test-results)

#### Features/Project Description:
* This automation framework is designed using Protractor and Cucumber.
* JavaScript is used as a programming language.
* Reporting is implemented using cucumber-html-reporter npm module. This generates the report in html. Also it captures the screenshots of the failed test cases.
* Test case scripts are in the `./resource/feature` directory.
* Page elements are in `./resource/common` directory. 
* Test step definitions are in `./resource/feature/specifications` directory. 
* Page functions are in `./resource/pageFunction` directory. 

#### Framework Structure
```
├───reports                            # This folder contains test result (includes html report, screenshots)
├───resource
│   ├───common                         # This folder contains file with all the web elements identified using different locators 
│   ├──feature                         # This folder contains feature files, step definition files and page function files
│   │   ├───specifications             # This folder contains test step definition files as per feature and hook file
│   │   │   ├───<feature1StepFile>.js
│   │   │   ├───<feature2StepFile>.js
│   │   │   └───hook.js                # This file contains hook functions, e.g. before and after functions
│   │   ├───<featureFile1>.feature 
│   │   └───<featureFile2>.feature
│   └───pageFunction                   # This folder contains function files
├───test.properties                    # This file contains test data
└───config.js                          # This file contains framework configuration
```

## To Get Started

#### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js:
  > [Install Node.JS](https://nodejs.org/en/download/ "Install Node.JS").
* Run `node -v` and make sure your node version is 6.x.x or greater.
* Run `java -version` and make sure you have Java Development Kit (JDK) installed. 
* Optional - Download and install any Text Editor like Visual Code/ Eclipse/ WebStorm/ IntelliJ.
  * [Install Visual Studio Code](https://code.visualstudio.com/download/ "Install Visual Studio Code").
  * [Install Eclipse](https://www.eclipse.org/downloads/packages/release/2021-03/r/eclipse-ide-enterprise-java-and-web-developers/ "Install Eclipse").

#### Setup Scripts 
* Clone the repository into a folder.
* Install Protractor: `npm install -g protractor`.
* Update necessary binaries of webdriver-manager: `webdriver-manager update` or `npm install -g webdriver-manager`.
* Go to Project root directory and run `npm install` to install the project dependencies from package.json.
* In a separate command line window, run `webdriver-manager start` and keep it running.

#### How to Write Test
* Add new spec under feature folder.
* Name the file as <testCaseName>.feature (e.g. bankManager.feature).
* Create a file under specifications folder as <pageName>.js (e.g. bankManagerSteps.js) to add step definition.
* Add functions under pageFunction folder.

#### How to Run Test
* `npm test` or `npm run test` - Run complete Test Suite. 

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

#### Troubleshooting
* run `node -v` and make sure your node version is 14.15.4 or greater
* run `java -version` and make sure you have Java Development Kit (JDK) installed. 
* Make sure you have a local instance of Selenium Server started.
* run `webdriver-manager update` to make sure you have the latest Selenium webdrivers. 

#### Sample Test Results
![Protractor, Cucumber and Javascript Test Results](./testReport.png?raw=true "Protractor, Cucumber and Javascript Test Results")
