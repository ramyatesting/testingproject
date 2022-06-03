//const { table } = require("console")

describe("TestSuite for webtables",function()
{

    beforeEach("Url",()=>
    {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

    })
   it('WebTables_edit',()=>
    {
        //edit by age
        cy.get('tbody').contains('tr','Larry').then(tablerow =>
        {
          cy.wrap(tablerow).find('.nb-edit').click()
          cy.wrap(tablerow).find('[placeholder="Age"]').clear().type('25')
          cy.wrap(tablerow).find('.nb-checkmark').click()
          cy.wrap(tablerow).find('td').eq(6).should('contain','25')
        })
      } )
      //entering first and last name values
      it('webtables_new values entering',()=>
      {
       cy.get('thead').find('.nb-plus').click()
       cy.get('thead').find('tr').eq(2).then( tablerow =>
        {
            cy.wrap(tablerow).find('[placeholder="First Name"]').type('Ramya')
            cy.wrap(tablerow).find('[placeholder="Last Name"]').type('Sri')
            cy.wrap(tablerow).find('.nb-checkmark').click()
       })
       cy.get('tbody tr').eq(0).find('td').then(tableColumns =>{

        cy.wrap(tableColumns).eq(2).should('contain','Ramya')
        cy.wrap(tableColumns).eq(3).should('contain','Sri')
    })
   // it.only('webtables_search based on age',()=>
    //{
        const age=[20, 30, 40, 200]
        cy.wrap(age).each( age =>
            {
        cy.get('thead [placeholder="Age"]').clear().type(age)
        cy.wait(500)
        cy.get('tbody tr').each( tableRow => 
            {
                if(age==200)
                {
                    cy.wrap(tableRow).should('contain','No data found')}else{                    
                    cy.wrap(tableRow).find('td').eq(6).should('contain',age)}
        })
        })
    //})
      })
    })

