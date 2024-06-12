/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('Test Database', () => {

    cy.task("SqlQueryPS", "select * from employee").then((res) => {
        console.log(res)
    })
When('I do something', ()=>{
    console.log("When I do something")
})
And('I do something', ()=>{
     console.log("And I do something")
})
Then('I do something', ()=>{
     console.log("Then I do")
})
});
