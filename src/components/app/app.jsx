import React from "react";
import {MainScreen} from '../main/main.jsx';
import PropTypes from "prop-types";

const titleClickHandler = () => {};

export const App = (props) => {

  const {filmName, genre, movieYear, filmsList} = props;

  return <MainScreen
    filmName={filmName}
    genre={genre}
    movieYear={movieYear}
    filmsList = {filmsList}
    onMovieTitleClick={titleClickHandler}/>;
};


App.propTypes = {
  filmName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
