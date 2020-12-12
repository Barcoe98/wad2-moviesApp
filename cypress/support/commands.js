// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


  /* eslint-disable */

const email = "b@b.com"
const pword = "123456"

const randomString = Math.random().toString(36).slice(-8);
const newEmail = randomString + "@Barcoe.com"
const newPword = Math.random().toString(36).slice(-8);
//const newPwordConfirm = "michael123"


    //Login Custom command
    Cypress.Commands.add('login', () => {
      cy.visit("/login")
      cy.get('#email').type(email)
      cy.get('#password').type(pword)
      cy.get('.btn').click()
    })

    
    Cypress.Commands.add('signUp', () => {
        cy.visit("/signup")
        cy.get('#email').type(newEmail)
        cy.get('#password').type(newPword)
        cy.get('#password-confirm').type(newPword)
        cy.get('.btn').click()

      })