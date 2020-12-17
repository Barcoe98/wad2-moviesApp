let actorId = null
let actor;

/* eslint-disable */

describe("Actor Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryActorIdignored) => {
        actorId = arbitraryActorIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${actorId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((actorDetails) => {
        actor = actorDetails;
        return actorDetails.id;
      })

      //before anything log in a user
      cy.login()

  });
  
  //before each visit hompage
  //click on first card img
  beforeEach(() => {
    cy.visit("/")
    //cy.visit("/actors/popular")
    cy.get("nav").get("div").eq(3).find("a").eq(3).click().get("a").find("a").eq(0).click();
    //cy.get(".card").eq(0).find("img").click();
    cy.get(".card").eq(2).find("img").click({force: true});
    //cy.get("#imgCard").eq(0).click({force: true})
  });

  //check if h2 header contains name of current actor
  it("should display actor name in the page header", () => {
    cy.get("h1").contains(actor.name);
  });

  //check if actor details are displayed
  it("should display the actor's details", () => {
    cy.get("h3").contains("Biography");
    
    cy.get("ul")
      .eq(0)
      .within(() => {
        cy.get("li").eq(0).contains("Birthday");
        cy.get("li").eq(1).contains(actor.birthday);
      });

      cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Place Of Birth");
        cy.get("li").eq(1).contains(actor.place_of_birth);
      });

      cy.get("ul")
      .eq(2)
      .within(() => {
        cy.get("li").eq(0).contains("Popularity");
        cy.get("li").eq(1).contains(actor.popularity);
      });

      cy.get("ul")
      .eq(3)
      .within(() => {
        cy.get("li").eq(0).contains("Gender");
        cy.get("li").eq(1).contains(actor.gender);
      });

      cy.get("ul")
      .eq(4)
      .within(() => {
        cy.get("li").eq(0).contains("Known for Department");
        cy.get("li").eq(1).contains(actor.known_for_department);
      });
    
  });

  //check is poster is displayed on movie details page
  it("should display actor picture", () => {
    //get div, find img
    //should contain src that is profile path of current actor
    cy.get("div")
      .find('img')
      .should("have.attr", "src")
      .should("include", actor.profile_path);
  });



})