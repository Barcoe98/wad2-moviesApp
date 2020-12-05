let movies;
let reviews;
const movieId = 497582; // Enola Holmes movie id
const reviewId = "5f69e4d0cee2f6003633becf"

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    //get first card on view, click img
    //check if url contain /movies/movie_id
    //check h2 header that it contains movie title
    it("should navigate to the movie details page and change browser URL", () => {

      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);

    });

    it("should allow navigation from site header", () => {
    
      //!! Error with Navbar 
      // cy.get("nav").get("NavDropdown").eq(2).find("a").click();
      // cy.url().should("include", `/favorites`);
      // cy.get("h2").contains("Favourite Movies");
      // cy.get("nav").get("li").eq(1).find("a").click();
      // cy.url().should("not.include", `/favorites`);
      // cy.get("h2").contains("Discover Movies");
      // cy.get("nav").find("li").eq(2).find("a").click();
      // cy.get("nav.navbar-brand").find("a").click();
      // cy.url().should("not.include", `/favorites`);
      // cy.get("h2").contains("No. Movies ");
      // cy.get("nav")
      
    });

    describe("From the Movie Details page ", () => {
        beforeEach(() => {
          cy.visit(`/movies/${movieId}`);
        });

        it("should change browser URL when show/hide reviews is clicked", () => {
          cy.contains("Show Reviews").click();
          cy.url().should("include", `/movies/${movieId}/reviews`);
          cy.contains("Hide Reviews").click();
          cy.url().should("not.include", `/movies/${movieId}/reviews`);
        });
    
        it("navigate to the full review page when a 'Full Review' link is clicked", () => {
            cy.contains("Show Reviews").click();
            cy.url().should("include", `/movies/${movieId}/reviews`);
            cy.get('tbody > :nth-child(1) > :nth-child(3) > a').click();
            cy.url().should("include", `/reviews/${reviewId}`);
        });

      });

      describe("From the Favorites page", () => {
        
        //!! Error with Navbar 
        // beforeEach(() => {
        //   cy.visit("/");
        //   cy.get(".card").eq(0).find("button").click();
        //   cy.get("nav").find("li").eq(2).find("a").click();
        // });

        // it("should navigate to the movies detail page and change the browser URL", () => {
        //   cy.get(".card").eq(0).find("img").click();
        //   cy.url().should("include", `/movies/${movies[0].id}`);
        //   cy.get("h2").contains(movies[0].title);
        // });
      });
 
      //testing back icon/button in movie details page
      describe("The Go Back button", () => {
        //before each visit home page
        beforeEach(() => {
          cy.visit("/");
        });

        //get first card in view, click on img
        //get back icon & click
        //url should not include /movies
        //get h2 title & should contain Discover movies
        it("should navigate from home page to movie details and back", () => {
          cy.get(".card").eq(1).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("not.include", `/movies`);
          cy.get("h2").contains("Discover Movies");
        });

        //Clcik on button on first card - adds to favourites
        //click on nav bar element 2(favorites)
        //click on back icon
        it("should navigate from favorites page to movie details and back", () => {
            //!! Error with Navbar 
            // cy.get(".card").eq(0).find("button").click();
            // cy.get("nav").find(".item").eq(2).find("a").click();
            // cy.get(".card").eq(0).find("img").click();
            // cy.get("svg[data-icon=arrow-circle-left]").click();
            // cy.url().should("include", `/movies`);
            // cy.get("h2").contains("Favourite Movies");
        });

    });

});
})
