/// <reference types="cypress" />

describe("Test Login Page of PrivyNow", () => {
    beforeEach(() => {
      cy.viewport(1200, 800)
      cy.clearLocalStorage();
      cy.visit('https://app.privynow.com/');
      // cy.get('input[data-cy="email"]').type('risnaprod1@mailinator.com');
      // cy.get('input[data-cy="password"]').type('Qwert123');
      // cy.get('button[data-cy="submit"]').click();
      cy.wait(10000)
    });

    // afterEach (() => {
    //   cy.wait(2000)
    //   cy.screenshot()
    // })



    it('Login', () => {
      //cy.visit('https://app.privynow.com/');
      cy.login("risnaprod1@mailinator.com","Qwert123");
    });
    // it('Try sidebar', () => {
    //     cy.clickLink("Sent");
    //     cy.url().should('include', '/sent');
    //});

})