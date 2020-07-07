import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MovieCard} from '../movie-card/movie-card.jsx';

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }


  render() {
    const {movies, onClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movieInfo={movie}
            onClick={(evt) => {
              evt.preventDefault();
              onClick(movie);
            }}
            onHover={() => {
              this.setState({
                activeCard: movie
              });
            }}/>
        ))}
      </div>
    );
  }
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};
