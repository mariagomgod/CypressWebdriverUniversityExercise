/// <reference types="cypress" />

import {HomePage} from "../page-objects/home-page";

describe('Home Menu', () => {

    const homePage = new HomePage()

    beforeEach (() => {
        homePage.navigate();
        homePage.clickFindOutMoreButton();
        cy.wait(1000);
    });

    it('Clicking the Find Out More Button, a modal appear', () => {
        homePage.verifyModalIsShown();
    });

    it('Clicking the close button of the modal, the modal is closed', () => {
        homePage.clickCloseButton();
        homePage.verifyModalIsNotShown();
    });
});