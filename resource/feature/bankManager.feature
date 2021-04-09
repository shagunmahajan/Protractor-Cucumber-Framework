Feature: Bank Manager Scenarios

    Background:
        And User sees "XYZ Bank" header

    # @BankManagerLogin @passedTest
    Scenario Outline: Verify user is able to create customer with Bank manager login and add accounts with different currency
        When User clicks on "Bank Manager Login" button
        When User clicks on "Add Customer" button
        And User provides "<data1>" in "First Name" field
        And User provides "<data2>" in "Last Name" field
        And User provides "<data3>" in "Post Code" field
        When User clicks on "Add Customer Submit" button
        Then User verifies the customer is added
        When User clicks on "Open Account" button
        When User select "<data1>" in customer dropdown
        When User select "Dollar" in currency dropdown
        When User clicks on "Process" button
        Then User verifies the account is created
        When User select "<data1>" in customer dropdown
        When User select "Rupee" in currency dropdown
        When User clicks on "Process" button
        Then User verifies the account is created
        When User select "<data1>" in customer dropdown
        When User select "Pound" in currency dropdown
        When User clicks on "Process" button
        Then User verifies the account is created

        Examples:
            | data1 | data2 | data3 |
            | user1 | last  | 20002 |

    # @BankManagerLogin @failedTest
    Scenario Outline: Verify user search for non exisitng customer
        When User clicks on "Bank Manager Login" button
        When User clicks on "Customers" button
        And User provides "<data1>" in "Search Customer" field
        Then User search for "<data1>", "<data2>", "<data3>" user
        Examples:
            | data1 | data2 | data3 |
            | user2 | last2  | 20002 |

# # @BankManagerLogin @failedTest
# Scenario Outline: Verify when user try to create customer with existing data
#     When User clicks on "Bank Manager Login" button
#     When User clicks on "Add Customer" button
#     And User provides "<data1>" in "First Name" field
#     And User provides "<data2>" in "Last Name" field
#     And User provides "<data3>" in "Post Code" field
#     When User clicks on "Add Customer Submit" button
#     # Then User verifies the customer is added
#     Examples:
#         | data1 | data2 | data3 |
#         | user1 | last  | 20002 |


