/// <reference types="cypress" />

describe("Test Registration Page of PrivyNow", () => {
    beforeEach(() => {
      cy.viewport(1200, 800)
      cy.clearLocalStorage();
      cy.visit('https://app.privynow.com/');
      cy.contains('Create New Account').click({force:true});
      cy.wait(1000);
    });
  
    // afterEach (() => {
    //   cy.wait(2000)
    //   cy.screenshot()
    // })

    it('[REG001] Access Registration Page', () => {
      cy.register("Create New Account");
      cy.url().should('include', 'sign-up');
    });

    it('[REG002] Input numbers in fullname field', () => {
      cy.fullName("555555"); 
      cy.nameDataResponse('Please type a proper name.');
    });

    it('[REG003] Input symbols in fullname field (except " . ")', () => {
      cy.reload();
      cy.fullName('|":?,><!');
      cy.nameDataResponse('Please type a proper name.')
    });

    it('[REG004] Input special characters in fullname field', () => {
      cy.reload(2000);
      cy.fullName('Rïsñæ Sètįyâńa');
      cy.nameDataResponse('Please type a proper name.');
    });

    it('[REG005] Input invalid email in email field', () => {
      cy.email('risnamailinator.com');
      cy.emailDataResponse('Please enter a valid email address.');
    });

    it('[REG006] Input unmeet requirement password', () => {
      cy.pass('u');
      cy.passDataResponse('Your password must be at least 8 characters contains alphanumeric and uppercase letter.');
    });

    it('[REG007] Input different confirmation password', () => {
      cy.reload(2000)
      cy.pass('Qwert123')
      cy.confirmPass('Qwe');
      cy.passDataResponse("The password doesn't match")
    });

    it('[REG008] Click back button', () => {
      cy.get('.btn-back').click();
      cy.wait(2000);
      cy.get('h1').should('contain', 'Log in');
      cy.get(".text-center").should('contain', 'Or, log in using');
      cy.url().should('include', 'sign-in');
    });

    it('[REG009] Forward browser after back from Registration page', () => {
      cy.go('forward');
      cy.get('h1').should('contain', 'Create New Account');
      cy.url().should('include', 'sign-up');
    });
})