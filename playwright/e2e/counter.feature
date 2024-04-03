Feature: Counter
  Scenario: User increments counter
    Given user is in app
    When user clicks on counter 3 times
    Then user can see "count is 3"
