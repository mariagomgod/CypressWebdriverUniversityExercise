/// <reference types="cypress" />

describe('Contact Us', () => {

    beforeEach (() => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.wait(1000);
    });

    it('When filling in the form, a message appears', () => {
        cy.get('input[name="first_name"]').type('text');
        cy.get('input[name="last_name"]').type('text');
        cy.get('input[name="email"]').type('text@gmail.com');
        cy.get('textarea[name="message"]').type('text');
        cy.get('form').submit();
        cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!');
    });
});