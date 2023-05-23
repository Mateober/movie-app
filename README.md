# Movie App

![Movie App](./src/assets/pc-homee.png)

## Description

Movie App is a web application that allows users to search for information about movies and TV shows. It utilizes The Movie Database (TMDb) API to fetch updated movie data, such as plot details, ratings, cast, and more. Users can perform searches, view movie details, and save their favorite movies.

## Screenshots

![Screenshot 1](./src/assets/pc-movies.png)
![Screenshot 2](./src/assets/pc-details.png)

## Features

- Search for movies and TV shows by title.
- View movie details, such as plot, rating, cast, genres, trailers, etc.
- Intuitive and user-friendly interface.
- Ability to sort movies and TV shows by Popularity, Rating, Release date, and Title.
- Ability to filter movies and TV shows by genres.
- Create an account and log in.
- Save favorite movies.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- React.js
- Redux
- Axios
- React Router
- The Movie Database (TMDb) API

## Installation

1. Clone this repository to your local machine: ```git clone https://github.com/Mateober/movie-app.git```

2. Navigate to the project directory: ```cd movie-app```
2. Navigate to the project directory: ```cd movie-app```

3. Install the dependencies: ```npm install```
3. Install the dependencies: ```npm install```

4. Rename the env.template file to .env and make the necessary changes to the environment variables:
4. Rename the env.template file to .env and make the necessary changes to the environment variables:
```
VITE_API_KEY= Add your TMDb API key
VITE_API_URL= Add your database URL
VITE_API_KEY= Add your TMDb API key
VITE_API_URL= Add your database URL
```

5. Start the application: ```npm run dev```

## User Database
The user database has been developed by my colleague [Juan Manuel Gomez Omil](https://github.com/JuanchiiGomezZ). He is responsible for designing the database structure.

Functionalities:

- POST sign up
- POST login
- GET user data
- GET user favs
- POST favorite
- DELETE favorite

[Database repository](https://github.com/JuanchiiGomezZ/FlexMoviesBackend)

## Copyright
Project created by Mateo Bertello  
[Github](https://github.com/Mateober)  
[Linkedin](https://www.linkedin.com/in/mateo-bertello/)

[The Movie Database (TMDb) API](https://www.themoviedb.org/?language=es)