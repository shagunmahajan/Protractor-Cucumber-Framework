var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(prop.get('defaultTimeOut'));

var mainFunction = require('../../pageFunction/pageFunc.js');
var webElements = require('../../common/webElements.js');

var countCustomer = 6;
var countAccount = 1016;

// Given('User launch browser', async function () {
//     await mainFunction.navigateTo();
//     mainFunction.assertValue(webElements.mainHeading, "XYZ Bank");
// });

When('User clicks on {string} button', async function (buttonType) {
    await mainFunction.clickButton(buttonType);
});

Then('User sees {string} header', function (text) {
    return mainFunction.assertValue(webElements.mainHeading, text);
});

When('User provides {string} in {string} field', async function (data, inputField) {
    await mainFunction.provideInputData(data, inputField);
});

Then('User verifies the customer is added', function () {
    var alert = mainFunction.switchToAlert();
    mainFunction.assertValue(alert, 'Customer added successfully with customer id :' + countCustomer);
    countCustomer++;
    return alert.accept();
});

Then('User verifies the account is created', function () {
    var alert = mainFunction.switchToAlert();
    mainFunction.assertValue(alert, 'Account created successfully with account Number :' + countAccount);
    countAccount++;
    return alert.accept();
});

When('User select {string} in customer dropdown', async function (customer) {
    return await mainFunction.selectDropdownbyTxt(webElements.customerNameDropDown, customer);
});

When('User select {string} in currency dropdown', async function (currency) {
    return await mainFunction.selectDropdownbyTxt(webElements.currencyDropDown, currency);
});

When('User try to delete created {string} customer', async function (customer) {
    await mainFunction.deleteUser(webElements.customerTable, customer);
});

When('Clear Search Field', async function () {
    await mainFunction.clearSearchField();
});

Then('User verifies the Customer {string}, {string}, {string} is deleted', async function (firstName, lastname, postCode) {
   await mainFunction.verifyDeletedUser(firstName, lastname, postCode);
});

Then("User search for {string}, {string}, {string} user", async function (firstName, lastname, postCode) {
   await mainFunction.searchUser(firstName, lastname, postCode);
})