import React from 'react';
import 'whatwg-fetch';
import { tmdbApiKey, youtubeBaseUrl } from './../settings';
import MovieDetails from './MovieDetails';

class MovieDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.state = {
      videoUrl: null,
      cast: [],
      details: {}
    };
  }

  componentDidMount() {
    this.getMovieDetails(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    this.getMovieDetails(nextProps.id)
  }

  getMovieDetails(id) {
    const detailsUrl = `http://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}`;
    const videoUrl = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmdbApiKey}`;
    const castUrl = `http://api.themoviedb.org/3/movie/${id}/credits?api_key=${tmdbApiKey}`;
    fetch(detailsUrl).then(response => response.json())
                     .then(details => this.setState({details: details}));
    fetch(videoUrl).then(response => response.json())
                   .then(videos => videos.results.slice(0, 1)
                                                 .map(video => this.setState({
                                                        videoUrl: youtubeBaseUrl + video.key
                                                      })));
    fetch(castUrl).then(response => response.json())
                  .then(cast => this.setState({...cast}));
  }

  render() {
    return (
      <MovieDetails videoUrl={this.state.videoUrl} cast={this.state.cast} details={this.state.details} />
    )
  }
}

export default MovieDetailsContainer;
