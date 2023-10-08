/// <reference types="cypress" />

describe("Test Dashboard of PrivyNow", () => {
    beforeEach(() => {
      cy.viewport(1200, 800)
      cy.clearLocalStorage();
      cy.visit('https://app.privynow.com/');
      cy.loginApp('risnaprod1@mailinator.com', 'Qwert123');
    });

    // afterEach (() => {
    //   cy.wait(2000)
    //   cy.screenshot()
    // })

    describe('Test Dashboard of PrivyNow', () => {
        it('[DAS001] Access dashboard page', () => {
          cy.url().should('include', '/dashboard');
          cy
        });

        it('[DAS002] Access document folders', () => {
          cy.sideBar('Sent');
          cy.get('.table-pagination__info--main').should('not.have.id', '#__BVID__1030');
    
          cy.sideBar('Draft');
          cy.get('.table-pagination__info--main').should('not.have.id', '#__BVID__1543');
    
          cy.sideBar('Inbox');
          cy.get('.table-pagination__info--main').should/('have.class', '.action-pagination__checkbox');
              
          cy.sideBar('Trash');
          cy.get('.table-pagination__info--main').should('not.have.id', '#__BVID__1543');
        });

        it('[DAS003] Move forward and back in document list', () => {
            
        });

        it('[DAS004] Search exsist document title', () => {
            
        });

        it('[DAS005] Search unexsist document title', () => {
            
        });

        it('[DAS006] Reset the document keyword search', () => {
            
        });

        it('[DAS007] Delete Draft to trash', () => {
            
        });

        it('[DAS008] Delete document permanently', () => {
            
        });
    });
})

// to be continued