export class OurProductsPage {

    navigate () {
        cy.visit('http://webdriveruniversity.com/Page-Object-Model/products.html');
    }

    verifyEightElementsAreShown() {
        cy.get('div.row > div[data-target="#myModal"]').should('have.length', 8);
    }

    clickOnAProduct() {
        cy.get('#special-offers').click();
    }

    verifyModalIsShown() {
        cy.get('#myModal:visible').should('include.text', 'SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM');
    }

    clickOnProceedButton() {
        cy.get('div.modal-footer > button').contains('Proceed').click();
    }

    verifyModalIsNotShown() {
        cy.get('#myModal:visible').should('not.exist');
    }
}
