export class HomePage {

    navigate () {
        cy.visit('http://webdriveruniversity.com/Page-Object-Model/index.html');
    }

    getFindOutMoreButton () {
        return cy.get('#button-find-out-more');
    }
}