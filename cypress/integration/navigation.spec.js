let movies;
let upcomingMovies;

let reviews;
const movieId = 497582; // Enola Holmes movie id
const reviewId = "5f69e4d0cee2f6003633becf"

/* eslint-disable */
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

      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")
        .then((response) => {
          upcomingMovies = response.results;
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


    //check all nav links work in dropdown menu from site header
    //get movies dropdown, click
    //get first element of dropdown click
    //check in url and name are name of page
    describe("From the site header ", () => {

      it("Navigate to Now Playing Movies", () => {
        //Now Playing Page
        cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(0).click();
        cy.url().should("include", `/movies/nowplaying`);
        cy.get("h2").contains("Now Playing Movies");
      });
      
      it("Navigate to Popular Movies", () => {
        //Popular Page
        cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(1).click();
        cy.url().should("include", `/movies/popular`);
        cy.get("h2").contains("Popular Movies");
      });
        
      it("Navigate to Top Rated Movies", () => {
        //Top Rated Page
        cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(2).click();
        cy.url().should("include", `/movies/toprated`);
        cy.get("h2").contains("Top Rated Movies");
      });

      it("Navigate to Upcoming Movies", () => {
        //Upcoming Page
        cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(3).click();
        cy.url().should("include", `/movies/upcoming`);
        cy.get("h2").contains("Upcoming Movies");
      });

      it("Navigate to Discover Movies / Home page", () => {
        //Discover Movies/Home Page
        cy.get("nav").get("div").eq(3).find("a").eq(3).click();
        cy.url().should("not.include", `/movies/favorites`);
        cy.get("h2").contains("Watch List Movies");
      });

      it("Navigate to Favourite Movies", () => {
        //Favourites Page
        cy.get("nav").get("div").eq(3).find("a").eq(2).click();
        cy.url().should("include", `/movies/favorites`);
        cy.get("h2").contains("Favorite Movies");
      });

      it("Navigate to Watch List Movies", () => {
        //Watch List Page
        cy.get("nav").get("div").eq(3).find("a").eq(3).click();
        cy.url().should("include", `/movies/watchlist`);
        cy.get("h2").contains("Watch List Movies");
      });

      it("Navigate to Home From Nav Brand", () => {
        //check nav brand
        cy.get("nav").find("div").eq(2).find("a").click();
        cy.url().should("not.include", `/movies/favorites`);
        cy.get("h2").contains("Discover Movies");  
      })
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
        
        beforeEach(() => {
          cy.visit("/");
          cy.get(".card").eq(0).find("button").click();
          cy.get("nav").get("div").eq(3).find("a").eq(2).click();
        });

        it("should navigate to the movies detail page and change the browser URL", () => {
          cy.get(".card").eq(0).find("img").click();
          cy.url().should("include", `/movies/${movies[0].id}`);
          cy.get("h2").contains(movies[0].title);
        });

      });

      describe("From the Watch List page", () => {
        
        beforeEach(() => {
          cy.visit("/movies/upcoming");
          cy.get(".card").eq(0).find("button").click();
          cy.get("nav").get("div").eq(3).find("a").eq(3).click();
        });

        it("should navigate to the movies detail page and change the browser URL", () => {
          cy.get(".card").eq(0).find("img").click();
          cy.url().should("include", `/movies/${upcomingMovies[0].id}`);
          cy.get("h2").contains(upcomingMovies[0].title);
        });

      });
 
      //testing back icon/button in movie details page
      describe("The Go Back button", () => {
        //before each visit home page
        beforeEach(() => {
          cy.visit("/");
        });

        // get first card in view, click on img
        // get back icon & click
        // url should not include /movies
        // get h2 title & should contain Discover movies
        it("should navigate from home page to movie details and back", () => {
          cy.get(".card").eq(1).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("not.include", `/movies`);
          cy.get("h2").contains("Discover Movies");
        });

        // Click on button on first card - adds to favourites
        // click on nav bar element 2(favorites)
        // click on back icon
        it("should navigate from favorites page to movie details and back", () => {
            cy.get(".card").eq(0).find("button").click();
            cy.get("nav").get("div").eq(3).find("a").eq(2).click();
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click();
            cy.url().should("include", `/movies`);
            cy.get("h2").contains("Favorite Movies");
        });

        //Watch List Movies to movie details and back
        it("should navigate from watch list page to movie details and back", () => {
          cy.visit("/movies/upcoming");
          cy.get(".card").eq(0).find("button").click();
          cy.get("nav").get("div").eq(3).find("a").eq(3).click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("include", `/movies`);
          cy.get("h2").contains("Watch List Movies");
        });

        //Now Playing Movies to movie details and back
        it("should navigate from now playing page to movie details and back", () => {
          cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(0).click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("include", `/movies/nowplaying`);
          cy.get("h2").contains("Now Playing Movies");
        });
        //Popular Movies to movie details and back
        it("should navigate from popular page to movie details and back", () => {
          // eslint-disable-next-line no-undef
          cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(1).click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("include", `/movies/popular`);
          cy.get("h2").contains("Popular Movies");
        });

        //Top Rated Movies to movie details and back
        it("should navigate from top rated page to movie details and back", () => {
          cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(2).click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("include", `/movies/toprated`);
          cy.get("h2").contains("Top Rated Movies");
        });

        //Upcoming Movies to movie details and back
        it("should navigate from upcoming page to movie details and back", () => {
          cy.get("nav").get("div").eq(3).find("a").eq(1).click().get("a").find("a").eq(3).click();
          cy.get(".card").eq(0).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("include", `/movies/upcoming`);
          cy.get("h2").contains("Upcoming Movies");
        });
    });

});
})
