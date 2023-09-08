/// <reference types="cypress" />

describe("Test Dashboard of PrivyNow", () => {
  beforeEach(() => {
    cy.viewport(1200, 800)
    cy.visit('https://app.privynow.com/')
      cy.get('input[data-cy="email"]').type("risnaprod1@mailinator.com")
      cy.get('input[data-cy="password"]').type('Qwert123')
      cy.get('button[data-cy="submit"]').should('have.class', 'btn-primary')
      cy.wait(500)
      cy.get('button[data-cy="submit"]').click({force:true})
      cy.wait(10000)
  });

    it("Should be able to access Settings from Dashboard", () => {
      cy.get('#__BVID__73__BV_button_').click()
      cy.contains('Settings').click()
      cy.wait(1000)
      cy.get('.profile-title').should('contain', 'Profile')
    })

    it("Should be able to access Settings from Dashboard", () => {
      cy.get('#__BVID__73__BV_button_').click()
      cy.contains('Settings').click()
      cy.wait(1000)
      cy.get('.profile-title').should('contain', 'Profile')
    })

    it.only("PROFILE > FULLNAME - Should not be able to input symbols in changing fullname", () => {
      cy.get('.col-2').contains('Change').click()
      cy.wait(1000)
      cy.get('input[id="fullname"]').type('/.,=][]!')
      cy.get('.text-danger').should('contain', 'Please type a proper name.')
    })

    // to be continued
})
