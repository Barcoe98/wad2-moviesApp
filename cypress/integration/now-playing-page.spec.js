
let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));
  
  /* eslint-disable */
  describe("Now Playing Movies Page", () => {
    before(() => {
        // Get Now Playing movies from TMDB and store in movies variable.
        cy.request(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")    // Take the body of HTTP response from TMDB
          .then((response) => {
            //store results in varaible movies
            movies = response.results
          })

          //before anything log in a user
          cy.login()

      })

      after(() => {
        //after all tests log user out
        cy.logOut();
        })

    beforeEach(() => {
        //forces refresh before each test
        cy.visit("/");
        cy.get("nav").get("div").eq(3).find("a").eq(2).click().get("a").find("a").eq(0).click();
    });
  
    //Check if page header has changed to "Now Playing Movies"
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Now Playing Movies");
        cy.get(".badge").contains(20);
      });
    })


    describe("Filtering", () => {
      describe("By movie title" ,() => {
        it("should display movies with 'a' in the title", () => {
          const searchString = 't'
          const matchingMovies = filterByTitle(movies, searchString );
          cy.get("input").clear().type(searchString) ;
          cy.get(".card").should("have.length", matchingMovies.length);
          cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
          });
        })

        it("should display movies with 'o' in the title", () => {
          const searchString = "o";
          const matchingMovies = filterByTitle(movies, searchString);
          cy.get("input").clear().type(searchString);
          cy.get(".card").should("have.length", matchingMovies.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
          })
        })

        it("should display no movie card (xyz) in the title", () => {
          const searchString = 'xyz'
          const matchingMovies = filterByTitle(movies, searchString );
          cy.get("input").clear().type(searchString) ;
          cy.get(".card").should("have.length", matchingMovies.length);
         
        })
      })

      describe("By movie genre", () => {
        it("should display movies with the specified genre only", () => {
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const searchString = "o";
          const matchingMovies = filterByGenre(movies, selectedGenreId, searchString);
          cy.get("select").select(selectedGenreText); 
          cy.get(".card").should("have.length", matchingMovies.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
          });      
        });
    });


    describe("By movie Title & Genre", () => {
      it("should display movies with the specified genre and title", () => {
        const selectedGenreId = 35;
        const selectedGenreText = "Comedy";
        const matchingMovies = filterByGenre(movies, selectedGenreId);
        cy.get("select").select(selectedGenreText); 
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });      
      });
  });

  });
  })