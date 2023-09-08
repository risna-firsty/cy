/// <reference types="cypress" />

describe("Test Dashboard of PrivyNow", () => {
    beforeEach(() => {
      cy.viewport(1200, 800)
      cy.visit('https://app.privynow.com/')
        cy.get('input[data-cy="email"]').type("risnaprod1@mailinator.com")
        cy.get('input[data-cy="password"]').type('Qwert123')
        cy.get('button[data-cy="submit"]').should('have.class', 'btn-primary')
        cy.wait(500)
        cy.get('button[data-cy="submit"]').click({froce:true})
        cy.wait(10000)
    });

//to be continued :))




})