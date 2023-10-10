class DashboardPage {
    profileBannerLocator() {
        return cy.get('#customer-dashboard-header')
    }

    sidebarLocator() {
        return cy.get('.sidebar-icon').eq(0)
    }

    getTabLocator(name) {
        return cy.xpath(`//a[contains(.,'${name}')]`);
    }
}

module.exports = new DashboardPage;