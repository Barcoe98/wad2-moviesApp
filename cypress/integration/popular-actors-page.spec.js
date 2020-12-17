
let actors;    // List of movies from TMDB

// Utility functions
const filterByTitle = (actorList, string) =>
  actorList.filter((a) => a.name.toLowerCase().search(string) !== -1);

  /* eslint-disable */
  describe("Popular Actors Page", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
          `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&page=1`
        )
          .its("body")    // Take the body of HTTP response from TMDB
          .then((response) => {
            actors = response.results
          })

          //before anything log in a user
          cy.login()
      })

     

    beforeEach(() => {
        //forces refresh before each test
        cy.get("nav").get("div").eq(3).find("a").eq(3).click().get("a").find("a").eq(0).click();
      });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Popular Actors");
        cy.get(".badge").contains(20);
      });
    })

    describe("Filtering", () => {
      describe("By Actor Name" ,() => {
        it("should display actor with 'b' in the title", () => {
          const searchString = 'b'
          const matchingActors = filterByTitle(actors, searchString );
          cy.get("input").clear().type(searchString) ;
          //cy.get(".card").should("have.length", matchingActors.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingActors[index].name);
          });
        })
        it("should display actors with 'o' in the title", () => {
          const searchString = "o";
          const matchingActors = filterByTitle(actors, searchString);
          cy.get("input").clear().type(searchString);
          //cy.get(".card").should("have.length", matchingActors.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingActors[index].name);
          })
        })
        it("should display no actor card (xyz) in the title", () => {
          const searchString = 'xyz'
          const matchingActors = filterByTitle(actors, searchString );
          cy.get("input").clear().type(searchString) ;
          //cy.get(".card").should("have.length", matchingActors.length);
         
        })
        
      })

  });
  })