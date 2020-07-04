import React from "react";
import renderer from "react-test-renderer";
import {App} from './app.jsx';

const filmName = `The Grand Budapest Hotel`;
const genre = `Drama`;
const movieYear = 2014;
// const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

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

describe(`Render App`, () => {

  it(`<App />`, () => {
    const tree = renderer
      .create(<App
        filmName={filmName}
        genre={genre}
        movieYear={movieYear}
        filmsList={filmsList}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
