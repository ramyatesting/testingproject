/// <reference types="Cypress" />

//const { invoke } = require("cypress/types/lodash");

describe("LoginFunctionality of swaglab application",()=>
{
//BeforeEach is for each and every it_block this can be executed
 beforeEach("Launch Application",()=>
  {
   //Launch the application
   cy.visit("https://www.saucedemo.com/");
   //validation for whether we were launch expected application or not based on applicationame,it includes in url then we confirm we are in coorect page
   cy.url().should('include',"saucedemo");
   //Verify the application  expected title of the page equal to given title name or not
   cy.title().should('be.equal','Swag Labs');
  })
//Verify login page with valid credentials(valid username,valid password)
 it("LoginPage Validation with valid username and valid password",()=>
 {  
   //Entering valid username and valid password
   cy.login('standard_user','secret_sauce');
   //Validate the navigation page whether we are in expected page or not based on that page lable
   cy.contains('Products');
   //wait some time for finding logout button
   //cy.wait(1000);
   //calling logout custom function
   cy.logout();
   //cy.go('back');
   //cy.go(-1);
   //cy.go('forward');
   //cy.go(1);
   //Validation for successful logout based on title of the page
   cy.title().should('be.equal','Swag Labs');
  })
  //Validate login page with valid username  and invalid password
  it("LoginPage Validation with valid username and invalid password",()=>
  {   
   //entering valid username  and invalid password
   cy.login('standard_user','secet_sauce');
   //Validating error message by using css
   cy.get("#login_button_container > div > form > div.error-message-container.error").should('have.text','Epic sadface: Username and password do not match any user in this service');
   //closing error window
   cy.get('.error-button').click();
   //clear and update username and  passwords input fields
   cy.clear_update();
  })
  //Validate login page with invalid username valid password
  it("LoginPage Validation with invalid username and valid password",()=>
  {  
   //Entering  invalid username valid password
   cy.login('standad_user','secret_sauce');
   //Handling error message by css selector
   cy.get("#login_button_container > div > form > div.error-message-container.error").should('have.text','Epic sadface: Username and password do not match any user in this service');
   //closing error window
   cy.get('.error-button').click();
   //clear and update username and  passwords input fields
   cy.clear_update();
  })
  //Validate login page with invalid username and invalid password
  it("LoginPage Validation with invalid username and invalid password",()=>
  {  
   //Entering invalid username and invalid password
   cy.login('standad_user','secet_sauce');
   //validate error message using css selector
   cy.get("#login_button_container > div > form > div.error-message-container.error").should('have.text','Epic sadface: Username and password do not match any user in this service');
   //Closing error window
   cy.get('.error-button').click();
   //clear and update username and  passwords input fields
   cy.clear_update();
   //Below command for cursor move to username inputfield
   cy.get('[placeholder="Username"]').click();
  })
  //Validate login page with blank username and password
  it("LoginPage Validation with blank username and blank password",()=>
  {  
   //entering blank username and password
   cy.get('[placeholder="Username"]').click(); 
   cy.get('[placeholder="Password"]').click();
   //Click on login button
   cy.get('[type="submit"]').click();
   //validate error message using css selector
   cy.get("#login_button_container > div > form > div.error-message-container.error").should('have.text','Epic sadface: Username is required');
   //Closing error window
   cy.get('.error-button').click();
   //Below command for cursor move to username inputfield
   cy.get('[placeholder="Username"]').click();
  })
  it.only("Test For Social Links",() =>
   {
    cy.ProductsPage();
    cy.get('.social').trigger('mouseover');
    cy.get('.social_twitter a').invoke('removeAttr','target').click();
    cy.url().should('include','https://twitter.com/saucelabs');
    //cy.wait(4000);
    //cy.get('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0').should('contain','Settings');
    cy.go('back');
    //cy.get('.social').trigger('mouseover');
    cy.get('.social_facebook a').invoke('removeAttr','target').click();
    cy.url().should('include','https://www.facebook.com/saucelabs');
    //cy.get('[placeholder="Email or phone"]').should('contain.text','Email or phone')
    
    cy.go('back');
    cy.get('.social_linkedin a').invoke('removeAttr','target').click();
    cy.url().should('include','https://www.linkedin.com/company/sauce-labs/');
    cy.go('back');
    cy.logout();
  })
  /*it.only("Test For Social Links",() =>
   {
    cy.ProductsPage();
    cy.get('.social').trigger('mouseover');
    //cy.get('.social_twitter a').invoke('removeAttr','target').click();
    const pop_url="https://twitter.com/saucelabs";
    cy.window().then(win => 
      {
        const stub=cy.stub(win,'open').as('winopen');
      })
     //cy.get('.social_twitter a').click();
     cy.window().then(win => 
      {
        const stub=cy.stub(win,'open').as('winopen');
      })
    cy.get('@winopen').should('include',pop_url);
     cy.window().then(win => 
      {
         win.location.href=pop_url;
          cy.get('span .css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0').should('have.text','Settings');
      })*/
    /*cy.url().should('include','https://twitter.com/saucelabs');
    //cy.wait(4000);
    //cy.get('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0').should('contain','Settings');
    cy.go('back');
    //cy.get('.social').trigger('mouseover');
    cy.get('.social_facebook a').invoke('removeAttr','target').click();
    cy.url().should('include','https://www.facebook.com/saucelabs');
    //cy.get('[placeholder="Email or phone"]').should('contain.text','Email or phone')
    
    cy.go('back');
    cy.get('.social_linkedin a').invoke('removeAttr','target').click();
    cy.url().should('include','https://www.linkedin.com/company/sauce-labs/');
    cy.go('back');*/
    //cy.logout();
  })
  it("Test For ordering lowest price item ",() => 
  {
     cy.ProductsPage();
     cy.get('.product_sort_container').select('Price (low to high)').as('val');
     //cy.get('.product_sort_container').select(2).should('have.value','lohi');
     cy.get('@val').should('have.value','lohi');
     cy.get('.active_option').should('contain.text','Price (low to high)');
     cy.get('.inventory_item_name').eq(0).should('contain.text','Sauce Labs Onesie');
     //cy.get('.inventory_item_price').eq(0).should('contain.text','7.99');//hot coded 7.99
     cy.get('.inventory_item_price').eq(0).then(($el) => 
     {
      var lprice=$el.text();//dynamically generate 7.99
      console.log(lprice);
      //cy.get('.inventory_item_price').eq(0).should('contain.text',lprice);
      cy.wrap($el).should('contain.text',lprice);

     })
     cy.get('#add-to-cart-sauce-labs-onesie').should('contain.text','Add to cart').click();
     cy.get('.shopping_cart_link').click();
     cy.get('.inventory_item_name').eq(0).should('contain.text','Sauce Labs Onesie');
     cy.get('.cart_quantity').should('have.text','1');
     cy.get('#checkout').should('contain.text','Checkout').click();
     cy.get('.title').should('have.text','Checkout: Your Information');
     cy.get('#first-name').type('Ramya');
     cy.get('#last-name').type('Sri');
     cy.get('#postal-code').type('50006');
     cy.get('#continue').click();
     cy.get('.header_secondary_container .title').should('contain.text','Checkout: Overview');
     cy.get('#item_2_title_link').should('have.text','Sauce Labs Onesie');
     cy.get('#finish').should('have.text','Finish').click();
     cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER');
     cy.logout();
    })
    it("Test For ordering highest price item ",() => 
     {
     cy.ProductsPage();
     cy.get('.product_sort_container').select('Price (high to low)').as('hval');
     //cy.get('.product_sort_container').select(2).should('have.value','lohi');
     cy.get('@hval').should('have.value','hilo');
     cy.get('.active_option').should('contain.text','Price (high to low)');//eq(0);//invoke('text');
     //cy.log('text');
     cy.get('.inventory_item_price').first().then(($el) => 
     {
      var hprice=$el.text();//dynamically generate 49.99
      console.log(hprice);
      //cy.get('.inventory_item_price').eq(0).should('contain.text',hprice);
      cy.wrap($el).should('contain.text',hprice);
    })
     cy.get('.inventory_item_name').first().should('contain.text','Sauce Labs Fleece Jacket');
     cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('contain.text','Add to cart');
     cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
     cy.get('.shopping_cart_link').click();
     cy.get('.inventory_item_name').eq(0).should('contain.text','Sauce Labs Fleece Jacket');
     cy.get('.cart_quantity').should('have.text','1');
     cy.get('#checkout').should('contain.text','Checkout').click();
     cy.get('.title').should('have.text','Checkout: Your Information');
     cy.get('#first-name').type('Ramya');
     cy.get('#last-name').type('Sri');
     cy.get('#postal-code').type('50006');
     cy.get('#continue').click();
     cy.get('.header_secondary_container .title').should('contain.text','Checkout: Overview');
     cy.get('#item_5_title_link').should('have.text','Sauce Labs Fleece Jacket');
     cy.get('#finish').should('have.text','Finish').click();
     cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER');
     cy.logout();
    })
    
