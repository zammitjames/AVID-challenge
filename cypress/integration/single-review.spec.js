/// <reference types="cypress" />

context('Single Review Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/reviews/1')
    })

    it('should return the profile name equal to the api',() => {
        cy.get('[data-cy=profile-name]').should('contain','Amazon Customer')
    })

})