export class ContactUsPage {

    navigate () {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    }

    fillForm () {
        cy.get('input[name="first_name"]').type('text');
        cy.get('input[name="last_name"]').type('text');
        cy.get('input[name="email"]').type('text@gmail.com');
        cy.get('textarea[name="message"]').type('text');
    }

    submitForm() {
        cy.get('form').submit();
    }

    verifyThankYouMessageIsShown() {
        cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!');
    }
}
