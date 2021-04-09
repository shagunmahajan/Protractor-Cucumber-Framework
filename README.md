Framework is created using cucumber and protractor, cucumber-html-reporter' is used for reporting, chai-as-promised is used for assertions

To start execution follow below commands
to install dependencies
npm install

Update the webdriver first
webdriver-manager update

Start the webdriver
webdriver-manager start

execute test scenarios
protractor config.js

To execute parallel execution on multiple browsers, multiCapabilities code can be uncommented
And to generate single report for multiple browsers, uncomment Multiple Cucumber HTML Reporter plugin code in config.js

Automation code
resource folder contains all the code including feature files, pagefunction files, common function , hook file, step definition files

There are 2 feature files
BankManager. feature - It contains test cases related to BankManager login, creating new customer, opening an account for newly created customer and deleting a customer
Customer.feature - It contains test cases related to Customer login, To deposit an amount to created accounts, to withdraw amount from accounts and to check the transactions related to accounts

There are 2 step files
customerSteps.js - contains test steps related to customer feature file
bankManagerSteps.js - contains test steps related to bankManager feature file and few common steps for both bankManager and customer feature files

hook.js - hook file contains before and after function that executes before and after every scenario
After function captures screenshot for every failed scenario
Note - hook.js is in specifications folder as it works properly when created in the same folder having step definition 

Page function-
It has only One file pageFunc.js that contains all functions implemented to verify the different steps

Common folder
It has webelements.js file that contains all the web elements identified using different locators

Test.properties 
this file contains baseurl and default time out variable that can be used in different files

Note- extra sleep time is added at few places to make the code work as the applicaiton is bit unstable and the elements are not getting loaded on time
Also transactions are not getting added/displayed properly intermittently. Please try to execute the script again if not loaded 

Note- delete created customer has been added with different set of user, and in Customer.feature file. due to execution time and application issues, user is not getting displayed intermittently
For table related functions, element is identified in the function itself to avoid getting any kind of exception due to application late response

Note- screenshot will not be added for Multiple Cucumber HTML Reporter
Archive code is still in progress, for the workaround, currently have created separate folder for each report with execution time.