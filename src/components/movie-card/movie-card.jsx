import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

export class MovieCard extends PureComponent {

  render() {
    const {movieInfo, onClick, onHover} = this.props;
    const {title, cover, preview} = movieInfo;

    return (
      <article
        className="small-movie-card catalog__movies-card">
        <VideoPlayer
          isPlaying={true}
          src={preview}
          poster={cover}
        />
        {/* <div className="small-movie-card__image">
          onMouseOver={() => {
            onHover(movieInfo);
          }}>
          <img src={poster} alt={title} width="280" height="175" onClick={onClick}/>
        </div> */}
        <h3 className="small-movie-card__title" onClick={onClick}>
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
};
