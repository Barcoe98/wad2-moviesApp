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
      cy.get("nav").get("div").eq(3).find("a").eq(3).click().get("a").find("a").eq(0).click();

  });
  
  //before each visit hompage
  //click on first card img
  beforeEach(() => {
    //cy.get("nav").get("div").eq(3).find("a").eq(3).click().get("a").find("a").eq(0).click();
    cy.get(".card").eq(2).find("img").click();
  });

  //check if h2 header contains name of current actor
  it("should display actor name in the page header", () => {
    cy.get("h1").contains(actor.name);
  });

  //check if actor details are displayed
  it("should display the actor's details", () => {
    cy.get("h3").contains("Overview");
    cy.get("h3").next().contains(actor.biography);
    cy.get("ul")
      .eq(0)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(actor.age);
      });
      cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Release Date");
        cy.get("li").eq(1).contains(movie.release_date);
      });
  });

  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", actor.homepage);
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