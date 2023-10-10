Feature: Dashboard

  Scenario: User should be able to switch onto different tabs on 'Customer' Portal
    Given I visit page "customer-portal/login"
    When I login in to My Journey 'Customer' Portal
    And I hover on the side bar
    And I click on "My Catalog" tab
    And I hover on the side bar
    And I click on "My Tools" tab
    And I hover on the side bar
    And I click on "My Outcomes" tab
    And I hover on the side bar
    And I click on "My Dashboard" tab
    Then I should see profile banner


  Scenario: User check accessibility on the whole page after customer portal login
    Given I visit page "customer-portal/login"
    When I login in to My Journey 'Customer' Portal
    And I wait "1" seconds
    And I perform accessibility testing on the whole page


  Scenario: User check accessibility excluding some elements on the whole page after customer portal login
    Given I visit page "customer-portal/login"
    When I login in to My Journey 'Customer' Portal
    And I wait "1" seconds
    And I perform accessibility testing excluding '.btn-header-box.btn[href$="outcomes"]' element


  Scenario: User check accessibility on 'My Catalog' page on 'Customer' Portal
    Given I visit page "customer-portal/login"
    When I login in to My Journey 'Customer' Portal
    And I wait "1" seconds
    And I hover on the side bar
    And I click on "My Catalog" tab
    And I perform accessibility testing on the whole page
