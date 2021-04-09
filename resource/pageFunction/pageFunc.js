var webElements = require('../common/webElements.js');
var selectedValue;
var currentDate = new Date();
var row;

var helper = function () {

    this.navigateTo = function () {
        return browser.get(prop.get("baseUrl"));
    }

    this.switchToAlert = function () {
        browser.sleep(2000);
        return browser.switchTo().alert();
    }

    this.clickButton = async function (buttonType) {
        switch (buttonType) {
            case "Bank Manager Login":
                elementName = webElements.bankManagerLoginBtn;
                break;
            case "Customer Login":
                elementName = webElements.customerLoginBtn;
                break;
            case "Customers":
                elementName = webElements.customersBtn;
                break;
            case "Add Customer":
                elementName = webElements.addCustomerBtn;
                break;
            case "Open Account":
                elementName = webElements.openAccBtn;
                break;
            case "Add Customer Submit":
                elementName = webElements.addCustomerSubmitBtn;
                break;
            case "Process":
                elementName = webElements.processBtn;
                break;
            case "Login":
                elementName = webElements.loginBtn;
                break;
            case "Home":
                elementName = webElements.homeBtn;
                break;
            case "Transactions":
                elementName = webElements.transactionsBtn;
                break;
            case "Deposit":
                elementName = webElements.depositBtn;
                break;
            case "Withdrawl":
                elementName = webElements.withdrawlBtn;
                break;
            case "Deposit Submit":
                elementName = webElements.depositSubmitBtn;
                break;
            case "Withdraw":
                elementName = webElements.withdrawlSubmitBtn;
                break;
            case "Back":
                elementName = webElements.backBtn;
                break;
        }
        browser.sleep(1000);
        return elementName.click();
    }

    this.provideInputData = function (data, inputField) {
        switch (inputField) {
            case "First Name":
                elementName = webElements.firstNameTxtBox;
                break;
            case "Last Name":
                elementName = webElements.lastNameTxtBox;
                break;
            case "Post Code":
                elementName = webElements.postCodeTxtBox;
                break;
            case "Search Customer":
                elementName = webElements.searchCustomer;
                break;
            case "Amount":
                elementName = webElements.amountTxtBox;
                break;
        }
        return elementName.clear().sendKeys(data);
    }

    this.clearSearchField = function () {
        webElements.searchCustomer.clear();
        webElements.searchCustomer.click();
    }

    this.selectDropdownbyNum = function (element, optionNum) {
        if (optionNum) {
            element.all(by.tagName('option'))
                .then(function (options) {
                    options[optionNum].click();
                });
        }
    }

    this.selectDropdownbyTxt = function (element, optionVal) {
        element.all(by.tagName('option'))
            .then(function (options) {
                options.some(function (option) {
                    option.getText().then(function (text) {
                        text = text.split(" ");
                        if (text[0] === optionVal) {
                            selectedValue = option;
                            return true;
                        }
                    });
                });
            }).then(function () {
                if (selectedValue) {
                    selectedValue.click();
                    browser.sleep(2000);
                }
            })
    }

    this.assertValue = function (element, expectedValue) {
        return expect(element.getText()).to.eventually.equal(expectedValue);
    }

    this.assertContainValue = function (element, expectedValue) {
        return expect(element.getText()).to.eventually.contain(expectedValue);
    }

    this.deleteUserNew = function (element, optionVal) {
        element.element(by.css('td:first-of-type')).getText().then(function (text) {
            if (optionVal === text) {
                selectedValue = element.element(by.css('tr[ng-click="deleteCust(cust)"]'));
                return true;
            }
        }).then(function () {
            if (selectedValue) {
                selectedValue.click();
                browser.sleep(3000);
            }
        })
    }

    this.deleteUser = function (elementN, optionVal) {
        var positions = element(by.tagName('tbody')).all(by.tagName('tr'));
        positions.then(function (options) {
            options.some(function (option) {
                option.element(by.css('td:first-of-type')).getText().then(function (text) {
                    if (optionVal === text) {
                        row = option.element(by.tagName('button'));
                        return true;
                    }
                });
            });
        }).then(async function () {
            if (row) {
                await row.click();
                browser.sleep(2000);
                return console.log("User Deleted");
            }
        });
    }

    this.verifyDeletedUser = function (firstName, lastName, postCode) {
        var positions = element(by.tagName('tbody')).all(by.tagName('tr'));
        if (expect(positions.isPresent()).to.eventually.be.false) {
            return true;
        }
        else {
            positions.then(function (options) {
                options.some(function (option) {
                    option.getText().then(function (text) {
                        text = text.split(" ");
                        if (text[0] === firstName) {
                            if (text[1] === lastName) {
                                if (text[2] === postCode) {
                                    expect(text[2].to.eventually.not.equal(lastName));
                                    return assert.isTrue(false);
                                }
                            }
                        }
                        // else {
                        //     return assert.isTrue(true);
                        // }
                    });
                });
            }).catch(function (notFound) {
                return false;
            });
        }

    }

    this.verifyTransaction = function (tranactionTyp, amount) {
        return browser.wait(function () {
            return webElements.lastTransaction.getText().then(function (row) {
                row = row.split(" ");
                if (row[1].substring(0, 2) === ("0" + currentDate.getDate()).slice(-2)) {
                    if (row[6] === tranactionTyp) {
                        if (row[5] === amount) {
                            return true;
                        }
                    }
                }
                return false;
            }).catch(function (notFound) {
                return false;
            });

        }, 3000, 'Transaction not found');
    }

    this.searchUser = function (firstName, lastName, postCode) {
        var positions = element(by.tagName('tbody')).all(by.tagName('tr'));
        return browser.wait(function () {
            return (positions.isPresent()).then(function (visible) {
                if (visible) {
                    positions.then(function (options) {
                        options.some(function (option) {
                            option.getText().then(function (text) {
                                text = text.split(" ");
                                if (text[0] === firstName) {
                                    if (text[1] === lastName) {
                                        if (text[2] === postCode) {
                                            expect(text[2].to.eventually.not.equal(lastName));
                                            return assert.isTrue(false);
                                        }
                                    }
                                }
                            })
                        })
                    })
                }
                return assert.isTrue(false);
            }).catch(function (notFound) {
                return false;
            });
        }, 3000, 'User not found');
    }

};
module.exports = new helper();