const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");


Given("I visit page", () => {
    cy.visit("https://broken-workshop.dequelabs.com/");
});
