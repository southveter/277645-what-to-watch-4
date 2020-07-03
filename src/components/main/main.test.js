import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from './main.jsx';

const filmName = `The Grand Budapest Hotel`;
const genre = `Drama`;
const movieYear = 2014;
const filmsList = [
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    src: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`,
  },
  {
    src: `img/macbeth.jpg`,
    title: `Macbeth`,
  },
  {
    src: `img/aviator.jpg`,
    title: `Aviator`,
  },
  {
    src: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`,
  },
  {
    src: `img/what-we-do-in-the-shadows.jpg`,
    title: `What We Do in the Shadows`,
  },
  {
    src: `img/revenant.jpg`,
    title: `Revenant`,
  },
  {
    src: `img/johnny-english.jpg`,
    title: `Johnny English`,
  },
];

describe(`Render MainScreen`, () => {

  it(`<MainScreen />`, () => {
    const tree = renderer
      .create(<MainScreen
        filmName={filmName}
        genre={genre}
        movieYear={movieYear}
        filmsList={filmsList}
        // onMovieTitleClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

