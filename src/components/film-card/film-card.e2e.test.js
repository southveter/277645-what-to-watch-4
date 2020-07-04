import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmCard} from './film-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const filmsList =
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
  };

// const {src, title} = filmsListMock;

const onHover = jest.fn();

it(`Hover on film card should get card title in active state`, () => {
  const screen = shallow(
      <FilmCard
        src={filmsList.src}
        title={filmsList.title}
        onHover={onHover}
      />);

  const filmCard = screen.find(`.small-movie-card__image`);

  filmCard.simulate(`mouseover`);

  expect(onHover.mock.calls[0][0]).toBe(`Fantastic Beasts: The Crimes of Grindelwald`);
});
