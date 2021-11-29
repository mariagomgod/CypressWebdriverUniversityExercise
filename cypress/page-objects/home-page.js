export class HomePage {

    navigate () {
        cy.visit('http://webdriveruniversity.com/Page-Object-Model/index.html');
    }

    clickFindOutMoreButton () {
        cy.get('#button-find-out-more').click();
    }

    verifyModalIsShown() {
        cy.get('#myModal:visible').should('exist').and('include.text', 'Welcome to webdriveruniversity.com');
    }

    clickCloseButton() {
        cy.get('button.btn.btn-default').contains('Close').click();
    }

    verifyModalIsNotShown() {
        cy.get('#myModal:visible').should('not.exist');
    }
}
