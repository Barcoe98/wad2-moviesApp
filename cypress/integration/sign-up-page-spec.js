
let movies;    // List of movies from TMDB

const email = "b@b.com"
const pword = "123456"
  
  /* eslint-disable */
  describe("Login Page", () => {
  
    //Login Custom command
  Cypress.Commands.add('login', (user) => {
    cy.visit("/login");
    cy.get('#email').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('.btn').click()

  })

    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
          `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")    // Take the body of HTTP response from TMDB
          .then((response) => {
            movies = response.results
          })
      })

    beforeEach(() => {
      cy.visit("/login");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        //cy.get("h1").contains("Login");
      });
    })

    describe("Login test", () => {
        it("Navigate to Discover Movies when user logs in", () => {
          //cy.login({ email: email, password: pword })
          //cy.get("h1").contains("Login");

        });
    })

    describe("Navigation Tests", () => {

        beforeEach(() => {
            //cy.login({ email: email, password: pword })
        });

        it("Navigate to Forgot Passsword", () => {
          cy.get(".link2").click()
          cy.get("h1").contains("Password Reset");
        });

        it("Navigate to Sign Up", () => {
            cy.get(".link").click()
            cy.get("h1").contains("Sign Up")
          });
    })
  })