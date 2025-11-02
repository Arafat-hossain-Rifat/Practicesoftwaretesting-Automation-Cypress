class LoginPage {
  elements = {
    signIn: () => cy.get('a[href="/auth/login"]'),
    emailField: () => cy.get('#email'),
    passwordField: () => cy.get('#password'),
    logInButton: () => cy.get('input[type="submit"]'),
    profile: () => cy.get('#menu'),
    signOut: () => cy.get('[data-test="nav-sign-out"]'),
    errorField: () => cy.get('[data-test="login-error"]'),
  };

  data = {
    email: "riyel.rifat321@gmail.com",
    wrongEmail: "wrong@gmail.com",
    password: "Arafat_456",
    wrongPassword: "Wrong_456", 
    errorMsgInvldCrdntl: "Invalid email or password",
  };

  visit() {
    cy.visit(
      "https://practicesoftwaretesting.com/"
    );
  }

  submitWithValues() {
    this.visit()
    this.elements.signIn().click()
    this.elements.emailField().type(this.data.email)
    this.elements.passwordField().type(this.data.password)
    this.elements.logInButton().click()
  }

}

module.exports = new LoginPage();