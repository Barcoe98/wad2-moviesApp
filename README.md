# Assignment 1 - ReactJS app & Agile Software Practice.


Name: Michael Barcoe (20080330)

## Features.
 
 + Feature 1 - Watchlist Page - Page that lists users watchlist movies.
   Tests: cypress/integration/watchlist-page.spec.js 

 + Feature 2 - Popular Movies Page - Lists Popular movies from TMDB
   Tests: cypress/integration/popular-page.spec.js 

 + Feature 3 - Top Rated Movies Page - Lists Top Rated movies from TMDB
   Tests: cypress/integration/top-rated-page.spec.js 

 + Feature 4 - Now Playing Movies Page - Lists Now Playing movies from TMDB
   Tests: cypress/integration/now-playing-page.spec.js 

 + Feature 5 - Actors List Page - List the popular actors in a card form.
   Tests: cypress/integration/popular-actors.spec.js 

 + Feature 6 - Latest Actors List Page - List the latest actors in a card form.(issue with endpoint)
   Tests: cypress/integration/latest-actors-page.spec.js 

 + Feature 7 - Actor Page - List details of actor.
   Tests: cypress/integration/actorDetails.spec.js 

 + Feature 8 - Actor Movie Credits component - List movie card of movies cctor has been in(issue with implementing)(works in stortybook). 

 + Feature 9 - Login Page - Lets user log in with an existing account.
   Tests: cypress/integration/login.spec.js 

 + Feature 10 - Sign up Page - Lets user create an account.
   Tests: cypress/integration/sign-up.spec.js 

 + Feature 11 - Forgot Password Page - Lets user reset password.
   Tests: cypress/integration/forgot.spec.js 

 + Feature 12 - Update Profile Page - Lets user update password and email.
   Tests: cypress/integration/update-profile.spec.js  

 + Feature 13 - Dashboard Page - List details of current logged in user.
   Tests: cypress/integration/dashboard.spec.js 
  

## Setup requirements (If required).

+ create firebase Auth project on your account and replace variables in project
+ Create Cypress Project and again replace variabl and project ID
+ Make Sure all  variables located in .env, cypress.env files are your own
+ Create gitlab projetct and add variable to the variable portal. For firebase, cypress and react (if you want to integrate with gitlab)


## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - Gets moview review
+ https://api.themoviedb.org/3/discover/movie - Gets list of discover movies
+ https://api.themoviedb.org/3/movie/popular - Gets a list of popular movies
+ https://api.themoviedb.org/3/movie/upcoming - Gets a list of Upcoming movies
+ https://api.themoviedb.org/3/movie/top_rated - Gets a list of Top-Rated movies
+ https://api.themoviedb.org/3/movie/now_playing - Gets a list of Now Playing movies
+ https://api.themoviedb.org/3/person/popular - Gets a list of Popular Actors movies
+ https://api.themoviedb.org/3/person/${id} - Gets detailed information on a specific actor.
+ https://api.themoviedb.org/3/person/${id}movie_credits - Gets movie credits on a specific actor.


## App Design.

### Component catalogue

Redesigned the whole app with my vision, Used storybook to design and implement new/exsisting components. Each of the elements i have redesigned. I haved added stories for actors, actor details, actors movie credits

![][stories]

### UI Design.

The following are each new feature i added and the correspoding test file, also a screenshot of the UI.

![][login]
>Shows login page for user to login with their credentials. Click on ign up text if user doesnt have an account. click on forgot password if user has forgotten their password

![][signUp]
>Shows sign up page for new users. Contains link for users to log in if they hav an account.

![][dashboard]
>Shows dashboard of current user. Button to update profile details for current user. Link for user to log out.

![][passwordReset]
>Shows the password Reset page when a user has forgotten their password and need to reset it.

![][updateProfile]
>Shows update profile page for logged in user. user can change there email and password.

![][upcomingMovies]
>Shows upcoming movies.

![][popularMovies]
>Shows popular movies.

![][nowPlayingMovies]
>Shows now playing movies.

![][topRatedMovies]
>Shows top rated movies.

![][favorites]
>Shows favorites page with users favorite movies.

![][watchlist]
>Shows watchlist page with users watch listed movies.

![][movieCard]
>Shows movie card.

![][movies]
>Shows list of movie cards.

![][movieDetails]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews. Clicking home icon will bring you to actors external homepage (not all actors have a homepage)

![][fullReview]
>Shows the full text for a movie review. 

![][newReview]
>Shows the form to create a movie review. 

![][actorCard]
>Shows actor card.

![][actors]
>Shows the list of Popular actors.

![][latestActors]
>Shows the list of Latest actors.(issue with endpoint)

![][actorDetails]
>Shows detailed information on a actor. Clicking home icon will bring you to actors external homepage (not all actors have a homepage)

![][actorMovieCredits]
>Shows cards on a actors movie credits. (issue with implementing into actor details page)

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/4hosa3
Gitlab URL : https://gitlab.com/Barcoe98/moviesapp-ci

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review id is invalid. 
+ cypress/integration/movieDetails.spec.js - test when a movie has no reviews.
+ etc


## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /movies/watchlist - (protected) - displays the user's favorite movies selection.
+ /movies/popular - displays list of Popular movie cards
+ /movies/toprated - displays list of Top Rated movie cards
+ /movies/nowplaying - displays list of Now Playing movie cards
+ /reviews/:id - displays the full text of a movie review.
+ /movies/:id - displays full details of movie, and short reviews
+ /actors/:id - displays full details of actor
+ /actors/popular - displays list of popular actors cards
+ /actors/latest - displays list of latest actors cards
+ /update-profile - display page for user to update there profile
+ /dashboard - displays the used information i.e username
+ /login - displays page foruser to enter their credntials and login
+ /signup - displays page for user to enter ther details and sign up
+ /forgot-password - displays page for user to recover password


### Data hyperlinking.

![][movieCardLink]
> Clicking a card causes the display of that Movie's details.

![][movieHomeLink]
> Clicking the home icon causes the display of that Movie'external home page.

![][actorHomeLink]
> Clicking home icon causes the display of that Actor's external home page.

![][actorCardLink]
> Clicking a card causes the display of that Actor's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][signUp&ForgotPasswordHyperLink]
>Clicking the 'Sign Up' when on the Login page will bring the user to the sign up page
>Clicking the 'Forgot Password ?' when on the login page will bring the user to the Forgot Password page

![][loginLink]
>Clicking the 'Login' when on the Sign Up page will bring the user to the sign up page

![][updatePasswordLink]
>Clicking the 'Update Profile' when on the login page will bring the user to the Forgot Password page


## Independent learning (If relevant).

Firebase - I used firebase authentication for user login and sign up. user can also reset password and update profile.
Private Routes - Put all pages in private routes so user would have to log in to get full features of app.
Percy - attempted percy, install and set up account , but issuw with app not obtaining percy_token, which was set in the .env.
Cypress Custom Commands - Created custome commands for logging a user in, sign a new user up. logging a user out. Adding a movie to favorites or watchlist. Did this using the cypress documenations on custom commands.
Browser Tab icon & name - Changed browser tab icona and name , to display movie icona and movie universe as the name

## References
Firebase Auth - https://www.youtube.com/watch?v=PKwu15ldZ7k&t=3s
Private Routes - https://www.youtube.com/watch?v=PKwu15ldZ7k&t=3s
Custom Commands - https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax
Percy - https://docs.percy.io/docs/cypress

---------------------------------


[favorites]: ./public/favorites.png
[watchlist]: ./public/watchlist.png

[fullReview]: ./public/fullReview.png
[newReview]: ./public/newReview.png

[nowPlayingMovies]: ./public/nowPlayingMovies.png
[topRatedMovies]: ./public/topRatedMovies.png
[popularMovies]: ./public/popularMovies.png
[upcomingMovies]: ./public/upcomingMovies.png

[movieCard]: ./public/movieCard.png
[movies]: ./public/movies.png
[movieDetails]: ./public/movieDetails.png

[actorCard]: ./public/actorCard.png
[actors]: ./public/actors.png
[actorDetails]: ./public/actorDetails.png

[passwordReset]: ./public/passwordReset.png
[login]: ./public/login.png
[signUp]: ./public/signUp.png
[dashboard]: ./public/dashboard.png
[updateProfile]: ./public/updateProfile.png

[reviewLink]: ./public/reviewLink.png

[actorCardLink]: ./public/actorCardLink.png
[movieCardLink]: ./public/movieCardLink.png
[actorHomeLink]: ./public/actorHomeLink.png
[movieHomeLink]: ./public/movieHomeLink.png

[ForgotPasswordLink]: ./public/ForgotPasswordHyperlink.png
[loginLink]: ./public/loginHyperlink.png
[updatePasswordLink]: ./public/updatePasswordHyperlink.png

[stories]: ./public/stories.png