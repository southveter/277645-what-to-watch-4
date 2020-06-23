import React from "react";
import {MainScreen} from './main.jsx';

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {filmName, genre, movieYear, movieNames} = props;

  return <MainScreen
    filmName={filmName}
    genre={genre}
    movieYear={movieYear}
    movieNames={movieNames}/>;
};
