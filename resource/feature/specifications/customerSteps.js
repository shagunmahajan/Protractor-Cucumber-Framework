var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(10 * 1000);

var mainFunction = require('../../pageFunction/pageFunc.js');
var webElements = require('../../common/webElements.js');

Then('User {string} is logged in', function (text) {
    return mainFunction.assertValue(webElements.userName, text);
});

When('User select {string} in account number dropdown', async function (accNum) {
    return await mainFunction.selectDropdownbyTxt(webElements.accNumDropDown, accNum);
});

Then('User verifies that deposit is successful', async function () {
    //    await expect(webElements.transactionLabel.getText()).to.eventually.equal('Transaction successful');
    await mainFunction.assertValue(webElements.transactionLabel, 'Deposit Successful');
});

Then('User verifies that withdrawl is successful', async function () {
    //    await expect(webElements.transactionLabel.getText()).to.eventually.equal('Transaction successful');
    await mainFunction.assertValue(webElements.transactionLabel, 'Transaction successful');
});

Then('User verifies transaction {string} {string}', async function (transactionTyp, amount) {
    //    await expect(webElements.transactionLabel.getText()).to.eventually.equal('Transaction successful');
    await mainFunction.verifyTransaction(transactionTyp, amount);
});