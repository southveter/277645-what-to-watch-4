import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from './main.jsx';

const filmName = `The Grand Budapest Hotel`;
const genre = `Drama`;
const movieYear = 2014;
const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe(`Render MainScreen`, () => {

  it(`<MainScreen />`, () => {
    const tree = renderer
      .create(<MainScreen
        filmName={filmName}
        genre={genre}
        movieYear={movieYear}
        movieNames={movieNames}
        onMovieTitleClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

