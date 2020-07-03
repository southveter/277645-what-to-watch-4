import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FilmCard} from '../film-card/film-card.jsx';

export class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmTitle: ``
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(title) {
    this.setState({activeFilmTitle: title});
  }

  render() {
    const {filmsList} = this.props;
    return (
      <div className="catalog__movies-list">
        {filmsList.map((film) => (
          <FilmCard
            key={film.title}
            src={film.src}
            title={film.title}
            onHover={this.handleHover} />
        ))}
      </div>
    );
  }
}


FilmList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
