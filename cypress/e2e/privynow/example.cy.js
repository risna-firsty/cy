/// <reference types="cypress"/>

describe('Inspect Automation test store items using chain of commands', () => {
    it('CLick on the first item usingthe item text ', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.productname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following items: " + itemHeaderText.text())
        })
    });
});