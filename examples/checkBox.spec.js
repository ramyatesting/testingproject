describe("TestSuite",function()
{

    beforeEach("Url",()=>
    {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()//({force:true})
    })
    it("CheckBoxes",() =>
    {
        cy.get('[type="checkbox"]').check({force:true})
        cy.get('[type="checkbox"]').eq(0).click({force:true})
    })
})