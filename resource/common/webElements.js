var webElements = function () {

    this.mainHeading = element(by.css('.mainHeading'));
    this.userName = element(by.className('fontBig ng-binding'));
    this.transactionLabel = element(by.className('error ng-binding'));

    //button
    this.homeBtn = element(by.css('.btn.home'));
    this.loginBtn= element(by.buttonText('Login'));
    this.bankManagerLoginBtn = element(by.cssContainingText('.btn.btn-primary.btn-lg', 'Bank Manager Login'));
    this.customerLoginBtn = element(by.cssContainingText('.btn.btn-primary.btn-lg', 'Customer Login'));
    this.addCustomerBtn = element(by.className('center')).element(by.partialButtonText('Add Customer'));
    this.openAccBtn = element(by.partialButtonText('Open Account'));
    this.customersBtn = element(by.partialButtonText('Customers'));
    this.addCustomerSubmitBtn = element(by.name('myForm')).element(by.buttonText('Add Customer'));
    this.processBtn = element(by.buttonText('Process'));
    this.transactionsBtn = element(by.buttonText('Transactions'));
    this.depositBtn = element(by.buttonText('Deposit'));
    this.withdrawlBtn = element(by.buttonText('Withdrawl'));    
    this.depositSubmitBtn = element(by.name('myForm')).element(by.buttonText('Deposit'));
    this.withdrawlSubmitBtn = element(by.buttonText('Withdraw'));
    this.backBtn = element(by.buttonText('Back'));   

    //textbox
    this.firstNameTxtBox = element(by.model('fName'));
    this.lastNameTxtBox = element(by.model('lName'));
    this.postCodeTxtBox = element(by.model('postCd'));
    this.searchCustomer = element(by.model('searchCustomer'));
    this.amountTxtBox = element(by.model('amount'));

    //drop down
    this.customerNameDropDown = element(by.model('custId'));
    this.currencyDropDown = element(by.model('currency'));
    this.accNumDropDown = element(by.model('accountNo'));

    //table
    this.customerTable = element(by.tagName('tbody'));
    this.delete = element(by.tagName('tbody')).element(by.tagName('tr')).element(by.tagName('button'));
    this.lastTransaction = element(by.tagName('tbody')).all(by.tagName('tr')).last();
    this.custTable = element(by.tagName('tbody')).all(by.tagName('tr'));
    
}


module.exports = new webElements();