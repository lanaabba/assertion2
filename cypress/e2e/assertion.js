/// <reference types="Cypress" />
Cypress.Commands.add('visitWebsite', () => {
    cy.visit('https://www.almosafer.com/ar');
    cy.get('.cta__saudi').click();
  });
  
  describe('assertion the website', () => {
    it('Departure date should be tomorrow', () => {
      cy.visitWebsite();
    let today = new Date();
    today.setDate(today.getDate() + 1);
    let  tomorrow = String(today.getDate());
    cy.get('[data-testid="FlightSearchBox__FromDateButton"]').should('include.text',`${ tomorrow}`);
    });

    it('to make sure the return date is set to be today s date +2', () => {
        cy.visitWebsite();
        
        let today = new Date();
        today.setDate(today.getDate() + 2);
        let Datereturn = String(today.getDate());
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').should('include.text',`${Datereturn}`);

        
    });
    it(' make sure that the flight class is set to be economy by default', () => {
        cy.visitWebsite();
        cy.get('[data-testid="Header__LanguageSwitch"]').click()
        cy.get('.sc-jWxkHr').invoke('text').should('contain','Economy')
    });
  });
  
  
  