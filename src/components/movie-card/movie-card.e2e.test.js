import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieCard} from './movie-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mocks =
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  };

const onClick = jest.fn();
const onHover = jest.fn();

it(`Hover on movie card should get card info in active state`, () => {
  const screen = shallow(
      <MovieCard
        movieInfo={mocks}
        onClick={onClick}
        onHover={onHover}
      />);

  const movieCard = screen.find(`.small-movie-card__image`);

  movieCard.simulate(`mouseover`);
  expect(onHover).toHaveBeenCalledTimes(1);
  expect(onHover.mock.calls[0][0]).toMatchObject(mocks);
});

it(`Should call onClick handler when clicking on title and poster`, () => {
  const movieCard = shallow(
      <MovieCard
        movieInfo={mocks}
        onClick={onClick}
        onHover={onHover}
      />
  );

  const movieTitle = movieCard.find(`h3.small-movie-card__title`);
  const moviePoster = movieCard.find(`img`);

  movieTitle.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);

  moviePoster.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(2);
});
