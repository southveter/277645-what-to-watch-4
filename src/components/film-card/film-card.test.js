import React from "react";
import renderer from "react-test-renderer";
import {FilmCard} from './film-card.jsx';


const filmsList =
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
  };

describe(`Render FilmCard`, () => {

  it(`<FilmCard />`, () => {
    const tree = renderer
      .create(<FilmCard
        src={filmsList.src}
        title={filmsList.title}
        onHover={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

