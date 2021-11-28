/// <reference types="cypress" />

import {HomePage} from "../page-objects/home-page";

describe('Home Menu', () => {

    const homePage = new HomePage()

    beforeEach (() => {
        homePage.navigate();
        homePage.getFindOutMoreButton().click();
        cy.wait(1000);
    });

    it('Clicking the Find Out More Button, a modal appear', () => {
        cy.get('#myModal:visible').should('exist').and('include.text', 'Welcome to webdriveruniversity.com');
    });

    it('Clicking the close button of the modal, the modal is closed', () => {
        cy.get('button.btn.btn-default').contains('Close').click();
        cy.get('#myModal:visible').should('not.exist');
    });
});