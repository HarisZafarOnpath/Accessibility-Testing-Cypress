const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");


Given("I visit page {string}", (website) => {
    cy.visit(website);
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
