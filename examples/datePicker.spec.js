describe("TestSuite",function()
{
 it('DatePicker',()=>
    {
        function selectDayFromCurrent(day){
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate ()
            let futureMonth = date.toLocaleString('default', {month: 'short'})
            let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()

        cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute =>
            {
            if(!dateAttribute.includes(futureMonth))
            {
              cy.get('[data-name="chevron-right"]').click()
              //cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
         selectDayFromCurrent(day)

            }else
            {
                cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
            }
        })
        return dateAssert
    }
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()//({force:true})
        
 cy.contains('nb-card','Common Datepicker').find('input')
                                         .then(inputval =>
                                            {
                                                cy.wrap(inputval).click()
                                                let dateAssert = selectDayFromCurrent(80)
                                                
                                               // cy.get('nb-calendar-day-picker').contains('17').click()
        //let dateAssert = futureMonth+''+futureDay+','+date.getFullYear()
                                                cy.wrap(inputval).invoke('prop', 'value').should('contain', dateAssert)
                                                cy.wrap(inputval).should('have.value',dateAssert)
                                            })
                                            })
})