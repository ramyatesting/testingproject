describe('LoginPage',()=>
{
    beforeEach('Launch Application',()=>
    {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

    })
it('Email and Password assertions',function()
{
//cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
//cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
//cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
//cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')

//Cypress style
cy.contains('nb-card','Using the Grid').then( firstform =>
{
    const emailLableFirst=firstform.find('[for="inputEmail1"]').text()
    const passwordLableFirst=firstform.find('[for="inputPassword2"]').text()
    expect(emailLableFirst).to.equal('Email')
    expect(passwordLableFirst).to.equal('Password')


cy.contains('nb-card','Basic form').then(secondForm =>
{
const emailLableSecond=secondForm.find('[for="exampleInputEmail1"]').text()
const passwordLableSecond=secondForm.find('[for="exampleInputPassword1"]').text()
expect(emailLableSecond).to.equal('Email address')
expect(passwordLableSecond).to.equal('Password')
//expect(emailLableFirst).to.equal(emailLableSecond)
expect(passwordLableFirst).to.equal(passwordLableSecond)
cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password')

})
})
})
})