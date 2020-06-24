import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';

const filmName = `The Grand Budapest Hotel`;
const genre = `Drama`;
const movieYear = 2014;
const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`Render App`, () => {

  it(`<App />`, () => {
    const tree = renderer
      .create(<App
        filmName={filmName}
        genre={genre}
        movieYear={movieYear}
        movieNames={movieNames}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
