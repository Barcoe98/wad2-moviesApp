let movieId = null
let movie;
let reviews;

/* eslint-disable */

describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
  });
  
  //before each visit hompage
  //click on first card img
  beforeEach(() => {
    //cy.visit(`/`);
    cy.get(".card").eq(2).find("img").click();
  });

  //check if h2 header contains title of current movie
  it("should display movie title in the page header", () => {
    cy.get("h1").contains(movie.title);
  });

  //check if movie details are displayed
  it("should display the movie's details", () => {
    cy.get("h3").contains("Overview");
    cy.get("h3").next().contains(movie.overview);
    cy.get("ul")
      .eq(0)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
      });
      cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Release Date");
        cy.get("li").eq(1).contains(movie.release_date);
      });
  });

  //! removed icon, will add later
  // it("should display the Home icon with the correct URL value", () => {
  //   cy.get(".fa-home")
  //     .parent()
  //     .should("have.attr", "href")
  //     .should("include", movie.homepage);
  // });

  //check is poster is displayed on movie details page
  it("should display movie poster", () => {
    //get div, find img
    //should contain src that is poster path of current movie
    cy.get("div")
      .find('img')
      .should("have.attr", "src")
      .should("include", movie.poster_path);
  });



})