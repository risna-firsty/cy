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

  afterEach (() => {
    cy.wait(2000)
    cy.screenshot()
  })


  it('[SET001] Access Profile Page', () => {
    
  });

  it('[SET002] Change name with invalid name', () => {
    
  });

  it('[SET003] Input invalid new password', () => {
    
  });

  it('[SET004] Input different password confirmation', () => {
    
  });

  it('[SET005] Change password by inputing old password only', () => {
    
  });

  it('[SET006] Change password by inputting valid new password only', () => {
    
  });

  it('[SET007] Change password by inputting valid password confirmation only', () => {
    
  });

  it('[SET008] Add unexsist contact', () => {
    
  });

  it('[SET009] Add exsist contacts', () => {
    
  });

  it('[SET010] Delete contact', () => {
    
  });

  it('[SET011] Search exsist contact', () => {
    
  });
  
    // it("Should be able to access Settings from Dashboard", () => {
    //   cy.get('#__BVID__73__BV_button_').click()
    //   cy.contains('Settings').click()
    //   cy.wait(1000)
    //   cy.get('.profile-title').should('contain', 'Profile')
    // })

    // it.only("PROFILE > FULLNAME - Should not be able to input symbols in changing fullname", () => {
    //   cy.get('.col-2').contains('Change').click();
    //   cy.wait(1000);
    //   cy.get('input[id="fullname"]').type('/.,=][]!');
    //   cy.get('.text-danger').should('contain', 'Please type a proper name.');
    // })

    // to be continued
})
