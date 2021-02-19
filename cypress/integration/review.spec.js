/// <reference types="cypress" />

context('Reviews Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/reviews')
    });
    it("should have a list of review cards with correct titles", () => {
        cy.get('[data-cy=review-items]').then(items=>{
            expect(items[0]).to.contain.text("Which iPhone you should Purchase ? iPhone 8, X, XS, XR ?")
        })
    })
})