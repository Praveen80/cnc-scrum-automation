Feature: Login(01)

  Scenario: Login

    Given User goes to Login Page
    Then User enters the login credentials and logs in
      | email | praveen@qburst.com |
      | password | qburst123 |

    Then User is redirected to the home page