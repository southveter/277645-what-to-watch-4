import React from "react";
import renderer from "react-test-renderer";
import {MovieCard} from './movie-card.jsx';


const mocks = {
  title: `The Big Lebowski`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};
const onClick = () => {};
const onHover = () => {};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movieInfo={mocks}
          onClick={onClick}
          onHover={onHover}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

