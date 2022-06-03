/// <reference types="cypress"/>

//const { constant } = require("cypress/types/lodash")

describe("UI Elements",function()

{
   this.beforeEach("url",function()
   {
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
   })
   it("Verify UI Elements-radiobuttons",function()
   {
       
       //handling readio buttons
       cy.contains('fieldset','Radio Button Example').find('[type="radio"]')
                                                                  .then(radiobuttons =>
                                                                     {
                                                                      cy.wrap(radiobuttons)
                                                                         .eq(0)
                                                                         .check({force:true})  
                                                                         .should('be.checked')
                                                                         //.should('have.text','Radio1' )

                                                                         cy.wrap(radiobuttons)
                                                                         .eq(1)
                                                                         .check({force:true})  
                                                                         .should('be.checked')
                                                                         //.should('have.value','Radio2' )   
                                                                           
                                                                         cy.wrap(radiobuttons)
                                                                         .eq(2)
                                                                         .check({force:true})  
                                                                         .should('be.checked')
                                                                         //.should('have.value','Radio3' )   

                                                                         cy.wrap(radiobuttons)
                                                                         .eq(0) 
                                                                         .should('not.be.checked')
                                                                         //.should('have.value','Radio1' )   

                                                                          })
                                                                        })

   //checkboxes
   it("Verify UI Elements-checkboxes",function()
   {
       
       
       cy.contains('fieldset','Checkbox Example').find('[type="checkbox"]')
                                                  .then(checkbox =>
                                                  {
                                                   cy.wrap(checkbox).eq(0).check({force:true})
                                                     .should('have.value','option1').should('to.be.checked')
                                                     //cy.get('[type="checkbox"]').eq(0).click({force:true})
                                                     //.should('have.value','option1')
                                                   
                                                   

                                                     cy.wrap(checkbox).eq(1).check({force:true})
                                                     .should('have.value','option2')
                                                     
                                                     cy.wrap(checkbox).eq(2).check({force:true})
                                                     .should('have.value','option3')
                                                     

                                                   })
   
                                                                     
   })
   
   /*it("Verify UI dropdowns",function()
   {
       
       //handling dropdowns
       cy.contains('fieldset','Dropdown Example').find('#dropdown-class-example').then(Dropdown =>
      {
      cy.wrap(Dropdown).select('Option1').should('have.value','option1')
      })
  
   })*/
  /*it("searchable dropdown",function()
   {
      cy.contains('fieldset','Suggession Class Example').find('#autocomplete').then(searchablebox  =>
         {
         cy.wrap(searchablebox).click().type('india').find('.ui-menu-item-wrapper').wait(4000).contains('India').click()
         //cy.wrap(searchablebox).should('contain.text','India')
         const label=searchablebox.find('#autocomplete').should('contain.text','India')
         expect(label).to.equal('Type to Select Countries')

       })
      })*/

   })
   