/// <reference types="cypress" />

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('should automatically redirect to the reviews page', () => {
        cy.url().should('eq','http://localhost:3000/reviews')
    })
})