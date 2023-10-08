// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const { last } = require("cypress/types/lodash");


//Visit Login - assert 1
Cypress.Commands.add("login1", (label)=>{
   cy.get('h1').should('contain', label);
})

//Visit Login - assert 2
Cypress.Commands.add("login2", (label)=>{
   cy.get(".text-center").should('contain',label);
})

// Login
Cypress.Commands.add("loginApp", (email,password) =>{
   cy.get('input[data-cy="email"]').type(email);
   cy.get('input[data-cy="password"]').type(password);
   cy.get('button[data-cy="submit"]').click({froce:true});
   cy.wait(10000);
})

//Login - email
Cypress.Commands.add("email", (label)=>{
   cy.get('input[data-cy="email"]').type(label);
})

// Login - email error message
Cypress.Commands.add("emailDataResponse", (label)=>{
   cy.get(".sm").should('contain', label);
})

//Login - password
Cypress.Commands.add("password", (label)=>{
   cy.get('input[data-cy="password"]').type(label);
})

// Visit Register
Cypress.Commands.add("register", (label)=>{
   cy.get('h1').should('contain', label);
   cy.url().should('include', 'sign-up');
})

// Register - fullname
Cypress.Commands.add("fullName",(label)=>{
   cy.get('input[data-cy="fullname"]').type(label);
   cy.get('span[class="sm"]').should('contain', 'Please type a proper name.');
})

//Register - fullname error message
Cypress.Commands.add("nameDataResponse", (label)=>{
   cy.get('span[class="sm"]').should('contain', );
})

//Register - email
Cypress.Commands.add("email", (label)=>{
   cy.get('input[data-cy="email"]').type(label);
   cy.get('span[class="sm"]').should('contain', 'Please enter a valid email address.');
})

//Register - email error message
Cypress.Commands.add("emailDataResponse", (label)=>{
   cy.get('span[class="sm"]').should('contain', 'Please enter a valid email address.');
})

//Register - password
Cypress.Commands.add('pass', (label)=>{
   cy.get('input[data-cy="password"]').type(label);
})

//Register - confirm password
Cypress.Commands.add("confirmPass", (label)=>{
   cy.get('input[data-cy="confirmPassword"]').type(label);
})

//Register - password/confirm password error message
Cypress.Commands.add("passDataResponse", (label)=>{
   cy.get('span[class="sm"]').should('contain',label);
})

//Dashboard - Sidebar
Cypress.Commands.add('sideBar', (label)=>{
   cy.get('.sidebar-item').contains(label).click();
   cy.wait(4000);
})

// Dashboard - Move next page on doc list
Cypress.Commands.add("nextPageDocList", (label)=>{
   cy.get('[class="icon icon-dark-grey link ml-0 ml-sm-2 icon-md-xl"]'). click();
   cy.wait(5000);
   cy.get('.font--secondary-grey').should('contain', label);
})

//Dashboard - Move back previous page on doc list
Cypress.Commands.add("previousPageDocList", (label)=>{
   cy.get('[class="icon icon-dark-grey link ml-0 ml-sm-3 icon-md-xl"]').click();
   cy.wait(5000);
   cy.get('.font--secondary-grey').should('contain', label);
})

//Dashboard - Search exsist doc
Cypress.Commands.add("docTitle",(label)=>{
   cy.get('input[placeholder="Search"]').type(label);
   cy.wait(5000);
})

//Dashboard - Search unexsist doc
Cypress.Commands.add("searchDataResponse", (label)=>{
   cy.get(".error-text").should("contain",label);
})


