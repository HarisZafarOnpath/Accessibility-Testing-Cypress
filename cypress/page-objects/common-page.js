class CommonPage {
    usernameField() {
        return cy.get("input[name='email']");
    }

    passwordField() {
        return cy.get("input[name='password']");
    }

    submit() {
        return cy.get("button[name='Sign In']").click();

    }

    login(username, password) {
        this.usernameField().type(username);
        this.passwordField().type(password);
        this.submit();
    }
}

module.exports = new CommonPage;
