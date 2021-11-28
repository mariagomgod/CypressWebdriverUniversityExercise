/// <reference types="cypress" />

describe('Our Products Menu', () => {

    beforeEach (() => {
        cy.visit('http://webdriveruniversity.com/Page-Object-Model/products.html');
    });

    it('Should have eight elements', () => {
        cy.get('div.row > div[data-target="#myModal"]').should('have.length', 8);
    });

    describe('When clicking on a product', () => {

        beforeEach (() => {
            cy.get('#special-offers').click();
            cy.wait(1000);
        });

        it('A modal appears', () => {
            cy.get('#myModal:visible').should('include.text', 'SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM');
        });

        it('When clicking the Proceed button, the modal disappears', () => {
            cy.get('div.modal-footer > button').contains('Proceed').click();
            cy.get('#myModal:visible').should('not.exist');
        });
    });
});