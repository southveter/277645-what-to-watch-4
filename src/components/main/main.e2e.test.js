import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MainScreen} from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

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
const onMovieTitleClick = jest.fn();

it(`Should movie title link be pressed`, () => {
  const mainScreen = mount(
      <MainScreen
        filmName={filmName}
        genre={genre}
        movieYear={movieYear}
        filmsList={filmsList}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const titleLink = mainScreen.find(`a.small-movie-card__link`);

  titleLink.forEach((title) => {
    title.simulate(`click`);
  });

  expect(onMovieTitleClick.mock.calls.length).toBe(filmsList.length);
});
