/// <reference types="cypress" />
describe('Locating elements',function()
{
    it('verify types of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/")//url
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')//search store
        cy.get("[type='submit']").click()//search
        cy.wait(5000)
        //cy.get('#add-to-cart-button-4').click()//add to cart
        cy.get(".product-box-add-to-cart-button").click()
        cy.get('#product_enteredQuantity_4').clear().type('2')//clear and enter
        cy.get('#add-to-cart-button-4').click()//
        cy.wait(5000)
        cy.get('#topcartlink > a > span.cart-label').click()
        cy.wait(3000)
        cy.get('.product-unit-price').contains('$1,800.00')

    })
}
)
