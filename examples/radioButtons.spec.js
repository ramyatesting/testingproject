const { CardComponent } = require("@swimlane/ngx-charts")

describe("TestSuite",function()
{

    beforeEach("Url",()=>
    {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()//({force:true})
    })
    it("RadioButtons",() =>
    {
      cy.contains('nb-Card',"Using the Grid").find('[type="radio"]')
                                             .then(radiobuttons =>
                                                {
                                                 cy.wrap(radiobuttons)
                                                     .first()
                                                     .check({force:true})  
                                                     .should('be.checked')

                                                cy.wrap(radiobuttons)
                                                   .eq(1)
                                                   .check({force:true})
                                                   .should('be.checked')

                                                cy.wrap(radiobuttons)
                                                   .eq(0)
                                                   .should('not.be.checked')
                                                
                                                   cy.wrap(radiobuttons)
                                                   .eq(2)
                                                   .should('be.disabled')
                                                
                                                })
    })
}
)
