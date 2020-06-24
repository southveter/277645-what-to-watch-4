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
const movieNames = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const onMovieTitleClick = jest.fn();

it(`Should movie title link be pressed`, () => {
  const mainScreen = mount(
      <MainScreen
        filmName={filmName}
        genre={genre}
        movieYear={movieYear}
        movieNames={movieNames}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const titleLink = mainScreen.find(`a.small-movie-card__link`);

  titleLink.forEach((title) => {
    title.simulate(`click`);
  });

  // expect(titleLink).toHaveBeenCalledTimes(movieList.length);

  // titleLink[0].simulate(`click`, {preventDefault() {}});
  // console.log(titleLink);

  expect(onMovieTitleClick.mock.calls.length).toBe(movieNames.length);
});
