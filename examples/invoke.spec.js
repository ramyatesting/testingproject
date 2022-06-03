describe("Invoke",function()
{
    beforeEach("Url",()=>
    {
        cy.visit('/')
        cy.contains('Forms').click()
       // cy.get('.menu-title').should(contain,'Forms')
        cy.contains('Form Layouts').click()//({force:true})
    })
    it("invoke command",function()
    {
        //Ex1
    cy.get('[for="exampleInputEmail1"]').should('contain','Email address')
    //Ex2:with expect,then
    cy.get('[for="exampleInputEmail1"]').then(label =>
       {
      expect(label.text()).to.equal('Email address')
    })
   //3rd method with invoke
   cy.get('[for="exampleInputEmail1"]').invoke('text').then(label=>
   {
 expect(label).to.equal('Email address')
   })

   //Check box is checked or not
   //cy.contains('nb-card','Basic form').find('nb-checkbox')
                                        //  .click()
                                         // .find('.custom-checkbox')
                                          //.invoke('attr','class')
                                         // .should('contain','checked')
 
     //check box with then
     cy.contains('nb-card','Basic form').find('nb-checkbox')
                                          .click()
                                          .find('.custom-checkbox')
                                          .invoke('attr','class')
                                         .then(classval =>
                                            {
                                             expect(classval).to.contain('checked')   
                                            })
   
    })
})