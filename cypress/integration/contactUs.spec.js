/// <reference types="cypress" />

import {ContactUsPage} from "../page-objects/contact-us-page";

describe('Contact Us', () => {

    const contactUsPage = new ContactUsPage()

    beforeEach (() => {
        contactUsPage.navigate();
        cy.wait(1000);
    });

    it('When filling in the form, a message appears', () => {
        contactUsPage.fillForm();
        contactUsPage.submitForm();
        contactUsPage.verifyThankYouMessageIsShown();
    });
});