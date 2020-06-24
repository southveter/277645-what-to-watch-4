import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app.jsx';

const Settings = {
  MOVIE_NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  MOVIE_YEAR: 2014
};

const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      filmName={Settings.MOVIE_NAME}
      genre={Settings.GENRE}
      movieYear={Settings.MOVIE_YEAR}
      movieNames = {movieNames}
    />,
    document.querySelector(`#root`)
);

