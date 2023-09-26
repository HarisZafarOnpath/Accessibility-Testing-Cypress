Feature: Pairin

  Scenario: I check accessibility of the whole page
    Given I visit page "https://broken-workshop.dequelabs.com"
    When I perform accessibility testing on the whole page

  Scenario: I perform accessibility testing on a specific element
    Given I visit page "https://broken-workshop.dequelabs.com"
    When I perform accessibility testing excluding '[data-testid="chocolate-cake"]' element





