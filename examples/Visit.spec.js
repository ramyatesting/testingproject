/// <reference types="Cypress" />


describe('TestSuite',function()
{
    it('Verify title of the Page:Positive',function()
    {
       cy.visit('https://www.w3schools.com/') 
       cy.title().should('eq','W3Schools Online Web Tutorials')
    })
    it.only('Verify title of the Page:Negative',function()
    {
       cy.visit('https://www.w3schools.com/') 
       cy.title().should('eq','W3Schools Online Web Tutorials');//.debug;
       //debugger;
       cy.pause();
    })

})


 