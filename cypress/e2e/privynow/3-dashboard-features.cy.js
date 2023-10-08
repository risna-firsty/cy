/// <reference types="cypress" />

describe("Test Dashboard of PrivyNow", () => {
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

    it("[DAS001] Access dashboard page", () => {
      cy.url().should("include", "/dashboard");
      cy;
    });

    it("[DAS002] Access document folders", () => {
      cy.sideBar("Sent");
      cy.get(".table-pagination__info--main").should(
        "not.have.id",
        "#__BVID__1030"
      );

      cy.sideBar("Draft");
      cy.get(".table-pagination__info--main").should(
        "not.have.id",
        "#__BVID__1543"
      );

      cy.sideBar("Inbox");
      cy.get(".table-pagination__info--main").should /
        ("have.class", ".action-pagination__checkbox");

      cy.sideBar("Trash");
      cy.get(".table-pagination__info--main").should(
        "not.have.id",
        "#__BVID__1543"
      );
    });

    it("[DAS003] Move forward and back in document list", () => {
      cy.nextPageDocList("11 - 20");
      cy.url().should("include", "?page=2&per_page=10");
      cy.previousPageDocList("1-10");
      cy.url().should("include", "?page=1&per_page=10");
    });

    it("[DAS004] Search exsist document title", () => {
      cy.docTitle("23{enter}");
      cy.get(".inbox-item__data").should("not.have.class", ".error-wrapper");
    });

    it("[DAS005] Search unexsist document title", () => {
      cy.docTitle("gdfhkgzshdfszhd{enter}");
      cy.searchDataResponse( "document’s not found.")
    });

    it("[DAS006] Reset the document keyword search", () => {
      cy.docTitle("ghghjgbjhgbj");
      cy.get('.icon-text-link').click();
      cy.wait(5000);
      cy.get('#__BVID__63').should('not.have.class', '.error-text')
        .and('not.have.text', "document’s not found.");
    });

});

  

// to be continued
