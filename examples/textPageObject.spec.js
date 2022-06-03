import { onDatepickerPage } from "../../support/Page_Objects/datePickerPage"
import { onFormLayoutsPage } from "../../support/Page_Objects/formLayoutPage"
import { navigateTo } from "../../support/Page_Objects/navigationPage"
import { onSmartTablePage } from "../../support/Page_Objects/smartTable"


describe("Test with Page Objects",function()
{
    beforeEach("Url",()=>
    {
        cy.openHomePage()
    })
   it.only('verify navigations across the pages',() =>
     {
        /*navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toastrPage()*/
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toastrPage()
    })
    it('Should submit Inline and Basic form and select tomorrow date in the calender', () => 
    {
        navigateTo.formLayoutsPage()
        //onFormLayoutsPage.submitInlineFormWithNameAndEmail('Sri','test@test.com')
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('sri','test@test.com')
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('test@test.com','password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7,14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLAstName('Ramya','Sri')
        onSmartTablePage.updateAgeByFirstName('Ramya','18')
        onSmartTablePage.deleteRowByIndex(1)



    })
})