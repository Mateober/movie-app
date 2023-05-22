# Movie App

![Movie App](https://github.com/Mateober/movie-app/blob/main/images/movie_app_banner.png)

## Descripción

Movie App es una aplicación web que permite a los usuarios buscar información sobre películas y series. Utiliza la API de The Movie Database (TMDb) para obtener datos actualizados sobre películas, como detalles de la trama, calificaciones, reparto y más. Los usuarios pueden realizar búsquedas, ver detalles de películas y guardar sus películas favoritas.

## Capturas de pantalla

![Screenshot 1](https://github.com/Mateober/movie-app/blob/main/images/screenshot1.png)
![Screenshot 2](https://github.com/Mateober/movie-app/blob/main/images/screenshot2.png)

## Características

- Búsqueda de películas y series por título.
- Visualización de detalles de películas, como sinopsis, calificación, reparto, géneros, trailers, etc.
- Interfaz de usuario intuitiva y amigable.
- Posibilidad de ordenar las peliculas y series por Popularidad, Calificacion Fecha de lanzamiento y Titulo.
- Posibilidad de filtrar las peliculas y series por generos.
- Crear una cuenta e iniciar sesion.
- Guardado de películas favoritas.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- React.js
- Redux
- Axios
- React Router
- API de The Movie Database (TMDb)

## Instalación

1. Clona este repositorio en tu máquina local: ```git clone https://github.com/Mateober/movie-app.git```

2. Ve al directorio del proyecto: ```cd movie-app```

3. Instala las dependencias: ```npm install```

4. Renombrar el archivo env.template por .env y haz los cambios respectivos en las variables de entorno
```
VITE_API_KEY= Agrega tu clave de API de TMDb
VITE_API_URL= Agrega la url de tu base de datos
```

5. Inicia la aplicación

## Base de datos de usuario
La base de datos de usuario ha sido desarrollada por mi compañero [Juan Manuel Gomez Omil](https://github.com/JuanchiiGomezZ). Es responsable de diseñar la estructura de la base de datos.

Funcionalidades:

- POST sign up
- POST login
- GET user data
- GET user favs
- POST favorite
- DELETE favorite

[Repositorio de la base de datos](https://github.com/JuanchiiGomezZ/FlexMoviesBackend)

## Derechos de autor
Proyecto creado por Mateo Bertello  
[Github](https://github.com/Mateober)  
[Linkedin](https://www.linkedin.com/in/mateo-bertello/)  
[API de The Movie Database (TMDb)](https://www.themoviedb.org/?language=es)
