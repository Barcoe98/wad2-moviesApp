# Assignment 1 - ReactJS app.

Name: Michael Barcoe (20080330)

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - Watchlist Page - Page that lists users watchlist movies.
 + Feature 2 - Popular Movies Page - Lists Popular movies from TMDB
 + Feature 3 - Top Rated Movies Page - Lists Top Rated movies from TMDB
 + Feature 4 - Now Playing Movies Page - Lists Now Playing movies from TMDB
 + Feature 5 - Top Rated Movies Page - Lists Top Rated movies from TMDB
 + Feature 6 - Top Rated Movies Page - Lists Top Rated movies from TMDB
 + Feature 7 - Actors List Page - List the popular actors in a card form.
 + Feature 8 - Actor Page - List details of actor.
  

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........
+ Replace variables located in .env, cypress.env files to your own
+ Replace firebase variablies to ones that match you project.
+ replace cypress variables

## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - Gets moview review
+ https://api.themoviedb.org/3/movie/popular - Gets a list of popular movies
+ https://api.themoviedb.org/3/movie/upcoming - Gets a list of Upcoming movies
+ https://api.themoviedb.org/3/movie/top_rated - Gets a list of Top-Rated movies
+ https://api.themoviedb.org/3/movie/now_playing - Gets a list of Now Playing movies
+ https://api.themoviedb.org/3/person/popular - Gets a list of Popular Actors movies
+ https://api.themoviedb.org/3/person/${id} - Gets detailed information on a specific actor.


## App Design.

### Component catalogue

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......
Redesigned the whole appp with my vision, Used storybook to design and implement new components

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........


![][login]
>Shows login page for user to login with their credentials. Click on ign up text if user doesnt have an account. click on forgot password if user has forgotten their password

![][signUp]
>Shows sign up page for new users.

![][dashboard]
>Shows dashboard of current user.

![][passwordReset]
>Shows the password Reset page whena user has forgotten their password.

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
>Shows the list of actors.

![][actorDetails]
>Shows detailed information on a actor. Clicking home icon will bring you to actors external homepage (not all actors have a homepage)





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

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][movieCardLink]
> Clicking a card causes the display of that Movie's details.

![][actorCardLink]
> Clicking a card causes the display of that Actor's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][signUpLink]
>Clicking the 'Sign Up' when on the Login page will bring the user to the sign up page

![][loginLink]
>Clicking the 'Login' when on the Sign Up page will bring the user to the sign up page

![][forgotPasswordLink]
>Clicking the 'Forgot Password ?' when on the login page will bring the user to the Forgot Password page

![][resetPasswordLink]
>Clicking the 'Update Profile' when on the login page will bring the user to the Forgot Password page


## Independent learning (If relevant).

Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

Firebase - I used firebase authentication for user login and sign up. user can also reset password and update profile.
Percy - 
Layout-Inspector - 
Cypress Custom Commands - 

## References
Firebase Auth - https://www.youtube.com/watch?v=PKwu15ldZ7k&t=3s
Custom Commands - https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax

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
[newReviewLink]: ./public/newReviewLink.png

[watchlistLink]: ./public/watchlistLink.png
[favoritesLink]: ./public/favoritesLink.png

[actorCardLink]: ./public/actorCardLink.png
[movieCardLink]: ./public/movieCardLink.png

[signUpLink]: ./public/signUpLink.png
[loginLink]: ./public/loginLink.png
[forgotPasswordLink]: ./public/forgotPasswordLink.png
[resetPasswordLink]: ./public/resetPasswordLink.png

[stories]: ./public/storybook.png