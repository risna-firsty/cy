/// <reference types="cypress" />

describe("Test Dashboard of PrivyNow", () => {
    beforeEach(() => {
      cy.viewport(1200, 800)
    });

    it("Should be able to access Settings from Dashboard", () => {
      cy.visit('https://app.privynow.com/')
      cy.get('input[data-cy="email"]').type('risnaprod1@mailinator.com')
      cy.get('input[data-cy="password"]').type('Qwert123')
      cy.wait(500)
      cy.get('button[data-cy="submit"]').click({froce:true})
      cy.wait(10000)
      cy.get('#__BVID__73__BV_button_').click()
      cy.contains('Settings').click()
      cy.wait(1000)
      cy.get('.profile-title').should('contain', 'Profile')
    })

    // to be continued
})
