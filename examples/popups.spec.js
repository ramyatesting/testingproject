describe('LoginPage',()=>
{
    beforeEach('Launch Application',()=>
    {
        cy.visit('/')
        
    })
    it('Popups',()=>{
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
        cy.get('nb-tooltip').should('contain','This is a tooltip')
    })
    it.only('dialog box',() =>
    {
      cy.contains('Tables & Data').click()
      cy.contains('Smart Table').click()
     /* cy.get('tbody tr').first().find('.nb-trash').click()
      cy.on('window:confirm',(confirm) =>{
          expect(confirm).to.equal('Are you sure you want to delete?')*/

          //using stub
          /*const stub = cy.stub()
          cy.on('window:confirm',stub)
          cy.get('tbody tr').first().find('.nb-trash').click().then(()=>
          {
              expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
          })*/
 cy.get('tbody tr').first().find('.nb-trash').click()
 cy.on('window:confirm',() => false)
      })

    })
//})

/*
describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case3', function (){
       // launch the url
       cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
       // click on submit button to produce the alert pop up
       cy.get('input[type="submit"]').click();
       // firing window: alert event with on() method
       cy.on('window:alert',(txt)=>{
          //Mocha assertions
          expect(txt).to.contains('Your full name cannot be blank.');
       })
    });
 });*/