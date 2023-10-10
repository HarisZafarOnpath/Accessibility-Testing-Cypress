require('cypress-axe');
require('cypress-xpath');

Cypress.Commands.add('visitPage', (path) => {
    const baseUrl = Cypress.config().baseUrl;
    const url = `${baseUrl}/${path}`;
    cy.visit(url);
});
