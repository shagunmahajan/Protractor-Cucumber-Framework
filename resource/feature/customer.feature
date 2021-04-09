Feature: Customer Scenarios

    Background:
        And User sees "XYZ Bank" header

    # @CustomerLogin @passedTest
    Scenario Outline: Verify user is able to deposit amount in different accounts
        When User clicks on "Customer Login" button
        When User select "<data1>" in customer dropdown
        When User clicks on "Login" button
        Then User "<data1> <data2>" is logged in
        When User select "<accNo>" in account number dropdown
        When User clicks on "Deposit" button
        And User provides "<amount>" in "Amount" field
        When User clicks on "Deposit Submit" button
        Then User verifies that deposit is successful
        When User clicks on "Transactions" button
        Then User verifies transaction "Credit" "<amount>"
        When User clicks on "Back" button
        Examples:
            | data1 | data2 | data3 | accNo | amount |
            | user1 | last  | 20002 | 1016  | 100    |
            | user1 | last  | 20002 | 1017  | 1000   |
            | user1 | last  | 20002 | 1018  | 10     |

    # @CustomerLogin @passedTest
    Scenario Outline: Verify user is able to withdrawl amount in different accounts
        When User clicks on "Customer Login" button
        When User select "<data1>" in customer dropdown
        When User clicks on "Login" button
        Then User "<data1> <data2>" is logged in
        When User select "<accNo>" in account number dropdown
        When User clicks on "Withdrawl" button
        And User provides "<amount>" in "Amount" field
        When User clicks on "Withdraw" button
        Then User verifies that withdrawl is successful
        When User clicks on "Transactions" button
        Then User verifies transaction "Debit" "<amount>"
        When User clicks on "Back" button
        Examples:
            | data1 | data2 | data3 | accNo | amount |
            | user1 | last  | 20002 | 1016  | 100    |
            | user1 | last  | 20002 | 1017  | 90     |
            | user1 | last  | 20002 | 1018  | 10     |

    # @CustomerLogin @FailedTest
    Scenario Outline: Verify when user try to withdraw amount with 0 Balance
        When User clicks on "Customer Login" button
        When User select "<data1>" in customer dropdown
        When User clicks on "Login" button
        Then User "<data1> <data2>" is logged in
        When User select "1016" in account number dropdown
        When User clicks on "Withdrawl" button
        And User provides "100" in "Amount" field
        When User clicks on "Withdraw" button
        Then User verifies that withdrawl is successful
        Examples:
            | data1 | data2 | data3 |
            | user1 | last  | 20002 |

    # @BankManagerDelete @passedTest
    Scenario Outline: Verify user is able to delete customer
        When User clicks on "Bank Manager Login" button
        When User clicks on "Add Customer" button
        And User provides "<data1>" in "First Name" field
        And User provides "<data2>" in "Last Name" field
        And User provides "<data3>" in "Post Code" field
        When User clicks on "Add Customer Submit" button
        Then User verifies the customer is added
        When User clicks on "Customers" button
        And User provides "<data1>" in "Search Customer" field
        When User try to delete created "<data1>" customer
        Examples:
            | data1 | data2 | data3 |
            | user2 | last  | 20002 |


