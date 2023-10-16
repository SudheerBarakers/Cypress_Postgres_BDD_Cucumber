/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('Test Database', () => {

    cy.task("SqlQueryPS", "select * from employee").then((res) => {
        console.log(res)
    })


});