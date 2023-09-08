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

    it("ACTION PAGINATION - Should be able to move to next page of doc list", () => {
      cy.get('[class="icon icon-dark-grey link ml-0 ml-sm-2 icon-md-xl"]'). click()
      cy.wait(5000)
      cy.get('.font--secondary-grey').should('contain', '11 - 20')
      cy.url().should('include', '?page=2&per_page=10')
    })

    it("ACTION PAGINATION - Should be able to move back to the previous page of doc list", () => {
      cy.get('[class="icon icon-dark-grey link ml-0 ml-sm-2 icon-md-xl"]'). click()
      cy.wait(5000)
      cy.get('[class="icon icon-dark-grey link ml-0 ml-sm-3 icon-md-xl"]').click()
      cy.wait(5000)
      cy.get('.font--secondary-grey').should('contain', '1 - 10')
      cy.url().should('include', '?page=1&per_page=10')
    })

    it("ACTION PAGINATION - Should be able to search document with exsist doc title", () => {
      cy.get('input[placeholder="Search"]').type('23{enter}');
      cy.wait(5000)
      cy.get('.inbox-item__data').should('not.have.class', '.error-wrapper')
    })

    it("ACTION PAGINATION - Should get empty state when search for unexsist doc title", () => {
      cy.get('input[placeholder="Search"]').type('gdfhkgzshdfszhd{enter}');
      cy.wait(5000)
      cy.get('.error-text').should('contain', "document’s not found.")
    })

    it("ACTION PAGINATION - Should be able to reset search keyword", () => {
      cy.get('input[placeholder="Search"]').type('gdfhkgzshdfszhd{enter}');
      cy.wait(5000)
      cy.get('.icon-text-link').click()
      cy.wait(5000)
      cy.get('#__BVID__63').should('not.have.class', '.error-text').and('not.have.text', "document’s not found.")
    });  
})