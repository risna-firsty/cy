/// <reference types="cypress" />

//this is the draft that I use to try commands and rules before i apply to the real script

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
      cy.get('.navbar-name').should('contain', 'Welcome')
    });

    it("Should be able to access document folders", () => {
        cy.contains('Sent').click();
        cy.wait(4000)
        cy.get('.table-pagination__info--main').should('not.have.id', '#__BVID__1030');
  
        cy.contains('Draft').click()
        cy.wait(4000)
        cy.get('.table-pagination__info--main').should('not.have.id', '#__BVID__1543')
  
        cy.contains('Inbox').click()
        cy.wait(4000)
        cy.get('.table-pagination__info--main').should/('have.class', '.action-pagination__checkbox')
            
        cy.contains('Trash').click()
        cy.wait(4000)
        cy.get('.table-pagination__info--main').should('not.have.id', '#__BVID__1543')
      })
   
  

})