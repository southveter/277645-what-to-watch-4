import React from "react";
import renderer from "react-test-renderer";
import {FilmList} from './film-list.jsx';


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

describe(`Render FilmList`, () => {

  it(`<FilmList />`, () => {
    const tree = renderer
      .create(<FilmList
        key={filmsList.title}
        src={filmsList.src}
        title={filmsList.title}
        onHover={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
