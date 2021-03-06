import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import MovieReviews from "../src/components/movieReviews";
import MovieReview from "../src/components/movieReview";

import MovieCreditCard from "../src/components/movieCreditCard";
import MovieCreditList from "../src/components/movieCreditList";

import Header from "../src/components/headeActorList";
import FilterControlsActor from "../src/components/filterControlsActor";
import ActorCard from "../src/components/actorCard";
import ActorList from "../src/components/actorList";
import ActorDetails from "../src/components/actorDetails";

import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../src/components/authentication/login";
import SignUp from "../src/components/authentication/signUp";


const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};
const sampleActor = {
  birthday: "1963-12-18",
  known_for_department: "Acting",
  deathday: null,
  id: 287,
  name: "Brad Pitt",
  also_known_as: [
    "برد پیت",
    "Бред Питт",
    "Бред Пітт",
    "Buratto Pitto",
    "Брэд Питт",
    "畢·彼特",
    "ブラッド・ピット",
    "브래드 피트",
    "براد بيت",
    "แบรด พิตต์"
  ],
  gender: 2,
  biography: "William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
  popularity: 10.647,
  place_of_birth: "Shawnee, Oklahoma, USA",
  profile_path: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
  adult: false,
  imdb_id: "nm0000093",
  homepage: null
};
const sampleMovieCredits = {
  "original_title": "Megamind",
  "popularity": 5.329891,
  "id": 38055,
  "backdrop_path": "/o6anuGPog9853CPiaPQEMmdBVT0.jpg",
  "overview": "Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
  poster_path: "/amXAUSAUrnGuLGEyc1ZNhBvgbnF.jpg"
};

storiesOf("Movie Credits List Pages/ Movie Credit Card", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCreditCard
    movieCredit={sampleMovieCredits}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sampleActor, profile_path: undefined };
    return (
      <MovieCreditCard
      movieCredit={sampleNoPoster}
      />
    );
  });

//Story for Movie credit List
storiesOf("Movie Credits List Pages/Movie Credits List", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => {
  const movieCredits = [sampleMovieCredits,sampleMovieCredits, sampleMovieCredits, sampleMovieCredits];
  return (
    <MovieCreditList
    movieCredit={movieCredits}

    />
  );
});


//Story for Filter controls on Actor List Pages 
storiesOf("Actor List Pages/Filter Controls", module)
  .add("default", () => (
    <FilterControlsActor onUserInput={action("button-click")} numActors={10} />
  ));

// Story For Movie Header
storiesOf("Actor List Pages/ Page Header", module).add("default", () => (
  <Header title="Popular Actors" numActors={10} />
));



  //Story for actor card
//actor card that show actor profile poster and default poster
storiesOf("Actor List Pages/Actor Card", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => (
  <ActorCard
    actor={sampleActor}
    action={actor => <button className="btn">
      Test Button
    </button>}
  />
))
.add("exception", () => {
  const sampleNoPoster = { ...sampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
      action={actor => (
        <button className="btn">
           Test Button
        </button>
      )}
    />
  );
});

//Story for Actor List
storiesOf("Actor List Pages/Actor List", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const actors = [sampleActor, sampleActor, sampleActor, sampleActor, sampleActor];
    return (
      <ActorList
        actors={actors}
        action={actor => (
          <button className="btn w-100">
            Test Button
            </button>
        )}
      />
    );
  });


/* Story for diplaying Actor Details*/
storiesOf("Actor Details Page/Actor Details", module)
.add("default", () => (
  <ActorDetails actor={sampleActor} />
));

//Story for Movie Header 
storiesOf("Actor Details Page/Actor Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);



//Story for home page with movie card
//movie card tat show movie poster and default poster
storiesOf("Movie List Pages/Movie Card", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn">
        Test Button
      </button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn">
            <FontAwesomeIcon icon={["fas", "star"]} />
          </button>
        )}
      />
    );
  });

   
//Story for Filter controls on Movie List Pages 
storiesOf("Movie List Pages/Filter Controls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

// Story For Movie Header
storiesOf("Movie List Pages/ Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

//Story for Movie List
storiesOf("Movie List Pages/Movie List", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100">
            Test Button
            </button>
        )}
      />
    );
  });

/* Story for diplaying Movie Details*/
storiesOf("Movie Details Page/Movie Details", module)
.add("default", () => (
  <MovieDetails movie={sample} />
));

//Story for Movie Header 
storiesOf("Movie Details Page/Movie Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

/*Display Movie Review (Detailed)*/
// storiesOf("Movie Details Page/Movie Review", module)
// .addDecorator(story => (
  //   <MemoryRouter initialEntries={["/reviews/:id"]}>{story()}</MemoryRouter>
  // ))
  // .add("default", () => (
  //   <MovieReview movie={sample} />
  // ));

//Display Movie Reviews
storiesOf("Movie Details Page/Movie Reviews", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => (
  <MovieReviews movie={sample} />
));

// Story For Login
storiesOf("Login Page", module)
.add("default", () => (
  <Login/>
));



