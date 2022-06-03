/// <reference types="cypress"/>

//const { contains } = require("cypress/types/jquery")

describe("TestSuite",function(){

    beforeEach("Url",()=>
    {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()//({force:true})
    })
    it("FirstTestCase",() =>
    {
        //by tag name
        //cy.visit('/')
        //cy.contains('Forms').click()
        //cy.contains('Form Layouts').click()//({force:true})
        cy.get('input')
        //by id
        cy.get("#inputEmail1")
        //by class
        cy.get('.input-full-width')
        //by attribute name
        cy.get('["placeholder"]')
        //by attribute name with value
        cy.get('[type="email"]')
        //by class name with vlaue
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //by tagname with attribute and its value
        cy.get('input[type="email"]')
        //by 2 diffrent attributes
        cy.get('[placeholder][fullwidth]')
    
        //by tagname,attribute with value,id and class name
        cy.get('input[type="email"]#inputEmail1.input-full-width')
        //cy.get('.ng-tns-c7-5 > .menu-title')
        //most recommended way to cypress
        cy.get('[data-cy="imputEmail1"]')
    })
    it.only("SecondTest",function()
    {
        cy.get('[data-cy="signInButton"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')
       cy.get('#inputEmail3').parents('form')
                            .find('button')
                            .should('contain','Sign in')
                            .parents('form')
                            .find('nb-checkbox')
                            .should('contain','Remember me')
                            .click()
       cy.contains('nb-card','Basic form').find('#exampleInputEmail1')
        //cy.get('.native-input visually-hidden')
    })
})


