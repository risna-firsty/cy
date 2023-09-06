/// <reference types="cypress" />

describe("Test Registration Page of PrivyNow", () => {
    beforeEach(() => {
      cy.viewport(1200, 800)
    });
 
    it("Should be able to access registration page of PrivyNow", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      cy.get('h1').should('contain', 'Create New Account')
      cy.url().should('include', 'sign-up');
    })
  
    it("FULLNAME - Should not be able to input numbers in full name field", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      cy.get('[data-cy="fullname"]').type('555555');
      cy.get('span[class="sm"]').should('contain', 'Please type a proper name.');
    })
  
    it("FULLNAME - Should not be able to input symbols in full name field", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      //cy.get('input[data-cy="fullname"]').clear();
      cy.get('input[data-cy="fullname"]').type('/\#@%^');
      cy.get('span[class="sm"]').should('contain', 'Please type a proper name.');
    })
  
    it("FULLNAME - Should not be able to input special characters in full name field", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      //cy.get('input[data-cy="fullname"]').clear();
      cy.get('input[data-cy="fullname"]').type('ñœäïę');
      cy.get('span[class="sm"]').should('contain', 'Please type a proper name.');
    })
  
    it("EMAIL - Should not be able to input incorrect email format", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      // cy.get('input[data-cy="fullname"]').clear();
      cy.get('input[data-cy="email"]').type('risris.mailinator.com');
      cy.wait(1000)
      cy.get('span[class="sm"]').should('contain', 'Please enter a valid email address.');
    })

    it("PASSWORD - Should not be able to input unmeet requirements password", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      //cy.get('input[data-cy="email"]').clear();
      cy.get('input[data-cy="password"]').type('u');
      cy.get('span[class="sm"]').should('contain', 'Your password must be at least 8 characters contains alphanumeric and uppercase letter.');
    })
    
    it("PASSWORD - Should be able to input different confirmation password", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      //cy.get('input[data-cy="password"]').clear();
      cy.get('input[data-cy="password"]').type('Akuntes1');
      cy.get('input[data-cy="confirmPassword"]').type('Akuntes2');
      cy.get('.icon-warm-grey').first().click();
      cy.wait(1000)
      cy.get('input[data-cy="password"]').should('have.value', 'Akuntes1');
      cy.get('input[data-cy="confirmPassword"]').last().click();
      cy.wait(1000)
      cy.get('input[data-cy="confirmPassword"]').should('have.value', 'Akuntes2');
    })
    
    it("BACK BUTTON - Should be able to back to login page", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      cy.get('.btn-back').click();
      cy.wait(2000);
      cy.get('h1').should('contain', 'Log in');
      cy.get(".text-center").should('contain', 'Or, log in using');
      cy.url().should('include', 'sign-in');
    })

    it("BACK BROWSER - Should be able to back to login page", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      cy.go('back');
      cy.wait(2000);
      cy.get('h1').should('contain', 'Log in');
      cy.get(".text-center").should('contain', 'Or, log in using');
      cy.url().should('include', 'sign-in');
    })

    it("CLICK LOGIN - Should be able to go to login page", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      cy.contains('Log in').click();
      cy.get('h1').should('contain', 'Log in');
      cy.get(".text-center").should('contain', 'Or, log in using');
      cy.url().should('include', 'sign-in');
    })

    it("FORWARD BROWSER - Should be able to go forward in 'login > regitration > login' flow", () => {
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
      cy.go('back');
      cy.wait(2000);
      cy.go('forward');
      cy.get('h1').should('contain', 'Create New Account');
      cy.url().should('include', 'sign-up');;
    })
  })