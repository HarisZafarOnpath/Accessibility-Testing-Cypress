const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
const CommonPage = require("../../page-objects/common-page");

And("I wait {string} seconds", (time) => {
    cy.wait(time * 1000);
});

Given("I login in to My Journey 'Customer' Portal", () => {
    CommonPage.login('haris+upskillusa@onpathtesting.com', 'Vista123+');
});

Given("I perform accessibility testing on the whole page", () => {
    cy.injectAxe();
    cy.checkA11y();
});

Given("I perform accessibility testing excluding {string} element", (element) => {
    cy.injectAxe();
    cy.checkA11y({
        exclude: [element],
    });
});

Given("I visit page {string}", (website) => {
    cy.visit(website);
});