import React from "react";
import {MainScreen} from './main.jsx';

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, genre, movieYear} = props;

  return <MainScreen movieName={movieName} genre={genre} movieYear={movieYear}/>;
};
