import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";


export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isMuted: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, poster} = this.props;
    console.log(src, poster);

    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;

    video.onmuted = () => this.setState({
      isMuted: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.src = ``;
    video.onmuted = null;
  }

  render() {

    const {isMuted, isPlaying} = this.state;

    return (
      <Fragment>
        <div className="small-movie-card__image"
          onMouseOver={() => this.setState({isPlaying: !this.state.isPlaying})}>
          <video
            ref={this._audioRef}
            muted={this.state.isMuted}
            // poster={this.props.poster}
          />
          {/* <img src={poster} alt={title} width="280" height="175" onClick={onClick}/> */}
        </div>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
};
