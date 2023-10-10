const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
const DashboardPage = require("../../../page-objects/Participant/dashboard-page");

Then("I should see profile banner", () => {
    DashboardPage.profileBannerLocator().should("be.visible");
});

Then("I hover on the side bar", () => {
    DashboardPage.sidebarLocator().trigger('mouseover');
});

And("I click on {string} tab", (name) => {
    DashboardPage.getTabLocator(name).click();
});
