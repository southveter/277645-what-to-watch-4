import React, {PureComponent} from "react";
import {Main} from '../main/main.jsx';
import {MoviePage} from '../movie-page/movie-page.jsx';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showMoviePage: null,
    };
  }

  _renderMainPage() {
    const {featuredMovie, moviesList} = this.props;
    const {showMoviePage} = this.state;

    if (showMoviePage) {
      return this._renderMoviePage(showMoviePage);
    }

    return <Main
      featuredMovie={featuredMovie}
      moviesList={moviesList}
      onMovieClick={(movie) => {
        this.setState({
          showMoviePage: movie
        });
      }}
    />;
  }

  _renderMoviePage(movie) {
    return <MoviePage
      movieInfo={movie}/>;
  }


  render() {
    const {moviesList} = this.props;
    const movieInfo = moviesList[0];

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderMainPage()}
        </Route>
        <Route exact path="/movie-page">
          {this._renderMoviePage(movieInfo)}
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  featuredMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    cast: PropTypes.string.isRequired,
  })).isRequired,
};
