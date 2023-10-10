Feature: Login

  Scenario: User should see profile banner after logging into 'Customer' portal
    Given I visit page "customer-portal/login"
    When I login in to My Journey 'Customer' Portal
    Then I should see profile banner