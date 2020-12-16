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
      cy.visit("/")
      cy.get("nav").find("div").eq(6).find("a").click();        
      cy.get('#email').type(email)
      cy.get('#password').type(pword)
      cy.get('.btn').click()

      //cy.percySnapshot();
    })

    //Sign Up Custom command
    Cypress.Commands.add('signUp', () => {
        cy.visit("/")
        cy.get("nav").find("div").eq(7).find("a").click();        
        cy.get('#email').type(newEmail)
        cy.get('#password').type(newPword)
        cy.get('#password-confirm').type(newPword)
        cy.get('.btn').click()

        //cy.percySnapshot();
    })

     //Log Out Custom command
    Cypress.Commands.add('logOut', () => {
      cy.visit("/")
      cy.get("nav").find("div").eq(8).find("a").click();        
      cy.get('.lgBtn').click()

      //cy.percySnapshot();
    })

    //navigates user to update profile page
    Cypress.Commands.add('NavigateToUpdateProfile', () => {
      cy.login();
      cy.get("nav").find("div").eq(8).find("a").click();        
      cy.get('#upBtn').click()

      //cy.percySnapshot();
    })