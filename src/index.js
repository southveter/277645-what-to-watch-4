import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app.jsx';

const Settings = {
  MOVIE_NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  MOVIE_YEAR: 2014
};

ReactDOM.render(
    <App
      movieName={Settings.MOVIE_NAME}
      genre={Settings.GENRE}
      movieYear={Settings.MOVIE_YEAR}
    />,
    document.querySelector(`#root`)
);

