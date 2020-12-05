
let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));
  
  describe("Popular Movies Page", () => {
    before(() => {
        // Get popular movies from TMDB and store in movies variable.
        cy.request(
          `https://api.themoviedb.org/3/movie/popular?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")    // Take the body of HTTP response from TMDB
          .then((response) => {
            //store results in varaible movies
            movies = response.results
          })
      })

    beforeEach(() => {
        //forces refresh before each test
      cy.visit("/movies/popular");
    });
  
    //Check if page header has cahnged to "Popular Movies"
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Popular Movies");
        cy.get(".badge").contains(20);
      });
    })


    describe("Filtering", () => {
      describe("By movie title" ,() => {
        it("should display movies with 't' in the title", () => {
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