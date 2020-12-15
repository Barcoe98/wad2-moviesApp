import '@percy/cypress';

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

      cy.percySnapshot();
    })

    
    Cypress.Commands.add('signUp', () => {
        cy.visit("/signup")
        cy.get('#email').type(newEmail)
        cy.get('#password').type(newPword)
        cy.get('#password-confirm').type(newPword)
        cy.get('.btn').click()

        cy.percySnapshot();
      })