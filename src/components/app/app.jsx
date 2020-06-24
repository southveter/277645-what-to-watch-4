import React from "react";
import {MainScreen} from '../main/main.jsx';
import PropTypes from "prop-types";

const titleClickHandler = () => {};

export const App = (props) => {

  const {filmName, genre, movieYear, movieNames} = props;

  return <MainScreen
    filmName={filmName}
    genre={genre}
    movieYear={movieYear}
    movieNames={movieNames}
    onMovieTitleClick={titleClickHandler}/>;
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  movieNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
