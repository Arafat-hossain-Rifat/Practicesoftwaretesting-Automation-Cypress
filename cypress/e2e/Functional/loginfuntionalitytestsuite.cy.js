import LoginPage from "../Pages/LoginPage";

describe('Login Test Suite', () => {

    beforeEach(() => {
        LoginPage.visit()
    });

    it('Scenario 1 : Successful Login and Logout', () => {
        LoginPage.submitWithValues()
        cy.url().should('include', '/account')
        LoginPage.elements.profile().click()
        LoginPage.elements.signOut().click()
        cy.url().should('include', '/auth/login')

    });

    it('Scenario 2 : Login with Invalid Credentials', () => {
        LoginPage.elements.signIn().click()
        LoginPage.elements.emailField().type(LoginPage.data.wrongEmail)
        LoginPage.elements.passwordField().type(LoginPage.data.wrongPassword)
        LoginPage.elements.logInButton().click()
        LoginPage.elements.errorField().should('contain', LoginPage.data.errorMsgInvldCrdntl)
    });
});
