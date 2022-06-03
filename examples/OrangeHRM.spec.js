///<reference types = "cypress"/>

//const { contains } = require("cypress/types/jquery")



describe("OrangeHRMLogin Page Validation",() =>
{
    beforeEach("Url Validation",function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials")
        cy.url().should('include',"orangehrmlive")
        
       //cy.visit("https://www.saucedemo.com/");
       // cy.title().should('eq','LOGIN Panel')
        
    })
    it("user and password leave it as empty",function()
    {
        //cy.get('#btnLogin').should('be.visible').click()
        //cy.get('#spanMessage').should('contain.text','Username cannot be empty')

    })
    it.only("Login Page Validation with valid user name and valid password",function()
    {
        cy.get('[name="txtUsername"]',{timeout : 10000}).should('be.visible').should('be.enabled').type("Admin");
        cy.get('[name="txtPassword"]').should('be.visible').should('be.enabled').type("admin123")
        cy.get('#btnLogin').should('be.visible').click()
        //cy.get('#spanMessage').should('contain.text','Username cannot be empty')
       /* cy.on('window.alert',(str)=>
        {
          expect(str).to.equal('chrome found the passwordyou just')
        })*/
        
    })
    it("Login Page Validation with valid username and in-valid password",() =>
    {
        cy.get('[name="txtUsername"]').should('be.visible').should('be.enabled').type("Admin")
        cy.get('[name="txtPassword"]').should('be.visible').should('be.enabled').type("adin123")
        cy.get('#btnLogin').should('be.visible').click()
    })
    it("Login Page Validation with in-valid username and valid password",() =>
    {
        cy.get('[name="txtUsername"]').should('be.visible').should('be.enabled').type("Adin")
        cy.get('[name="txtPassword"]').should('be.visible').should('be.enabled').type("admin123")
        cy.get('#btnLogin').should('be.visible').click()
    })
    it("Login Page Validation with in-valid username and in-valid password",() =>
    {
        cy.get('[name="txtUsername"]').should('be.visible').should('be.enabled').type("Adin")
        cy.get('[name="txtPassword"]').should('be.visible').should('be.enabled').type("adin123")
        cy.get('#btnLogin').should('be.visible').click()
    })
    
})


