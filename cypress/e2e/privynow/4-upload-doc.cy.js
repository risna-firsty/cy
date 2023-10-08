/// <reference types="cypress" />

describe("Test Upload of PrivyNow", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit('https://app.privynow.com/');
    cy.get('input[data-cy="email"]').type("risnaprod1@mailinator.com");
    cy.get('input[data-cy="password"]').type('Qwert123');
    cy.wait(500);
    cy.get('button[data-cy="submit"]').click({froce:true});
    cy.wait(10000);
  });

  afterEach (() => {
    cy.wait(2000)
    cy.screenshot()
  })
  
  it('[UP001] Access upload page', () => {
    
  });

  it('[UP002] Upload document using current file name', () => {
    
  });

  it('[UP003] Upload document with a new document title', () => {
    
  });

  it('[UP004] Self sign document', () => {
    
  });

})