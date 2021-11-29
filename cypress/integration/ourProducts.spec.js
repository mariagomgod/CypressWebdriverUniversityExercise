/// <reference types="cypress" />

import {OurProductsPage} from '../page-objects/our-products-page';

describe('Our Products Menu', () => {

    const ourProductsPage = new OurProductsPage();

    beforeEach (() => {
        ourProductsPage.navigate();
    });

    it('Should have eight elements', () => {
        ourProductsPage.verifyEightElementsAreShown();
    });

    describe('When clicking on a product', () => {

        beforeEach (() => {
            ourProductsPage.clickOnAProduct();
            cy.wait(1000);
        });

        it('A modal appears', () => {
            ourProductsPage.verifyModalIsShown();
        });

        it('When clicking the Proceed button, the modal disappears', () => {
            ourProductsPage.clickOnProceedButton();
            ourProductsPage.verifyModalIsNotShown();
        });
    });
});