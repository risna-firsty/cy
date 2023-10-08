/// <reference types="cypress" />

describe("Test Login page of  PrivyNow", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.clearLocalStorage();
    cy.visit("https://app.privynow.com/");
    cy.wait(1000);
  });

  it("[LOG001] Access login page", () => {
    cy.login1('Log in');
    cy.login2('Or, log in using');
    cy.url().should('include', 'sign-in');
  });

  it("[LOG002] Input invalid email address", () => {
    cy.email('risrisgmail.com');
    cy.emalDataResponse('Please enter a valid email address.');
  });

  it("[LOG003] Input valid email address and password", () => {
    cy.email("risnaprod1@mailinator.com");
    cy.password("Qwerty12345");
    cy.get('button[data-cy="submit"]').should('have.class', 'btn-primary');
  });

  it("[LOG004] Login with invalid credential", () => {
  cy.email("risnaprod1@mailinator.com");
  cy.password("Qwerty12345");
  cy.get('button[data-cy="submit"]').click({force:true});
  cy.get('.error-box').should('contain','Your email or password combination is incorrect, please check and try again')
  });

  it("[LOG005] Login with valid credential", () => {
    cy.loginApp('risnaprod1@mailinator.com', 'Qwert123');
    cy.get('.navbar-name').should('contain', 'Welcome');
  });
});
