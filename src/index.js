import React from "react";
import ReactDOM from "react-dom";
import {App} from './components/app/app.jsx';
import movies from './mocks/movies.js';

const {featured, list} = movies;

ReactDOM.render(
    <App
      featuredMovie={featured}
      moviesList={list}
    />,
    document.querySelector(`#root`)
);

