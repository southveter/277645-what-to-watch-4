import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export class FilmCard extends PureComponent {

  render() {
    const {onHover, src, title} = this.props;

    return (
      <article
        onMouseOver={(evt) => {
          evt.preventDefault();
          onHover(title);
        }}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">

          <img src={src} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
