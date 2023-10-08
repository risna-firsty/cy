/// <reference types="cypress" />

describe("Test Upload of PrivyNow", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.clearLocalStorage();
    cy.visit("https://app.privynow.com/");
    cy.loginApp("risnaprod1@mailinator.com", "Qwert123");
  });

  // afterEach (() => {
  //   cy.wait(2000)
  //   cy.screenshot()
  // })
  
  it('[UP001] Access upload page', () => {
    cy.get('a[href="/dashboard/document/setup"]').click();
    cy.url().should('include', "/setup");
    cy.get('.step-title').should('contain', 'Browse Document')

    
  });

  it('[UP002] Upload document using current file name', () => {
    
  });

  it('[UP003] Upload document with a new document title', () => {
    
  });

  it('[UP004] Self sign document', () => {
    
  });

})

// to be continued