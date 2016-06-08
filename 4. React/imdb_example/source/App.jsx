import React from 'react';
import MovieDetailsContainer from './MovieDetailsContainer';
import Search from './Search';
import UpcomingMovieList from './UpcomingMovieList';
import MovieHistory from './MovieHistory';
import MovieCard from './MovieCard';
import { imageBaseUrl, tmdbApiKey } from './../settings';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectMovie = this.selectMovie.bind(this);
    this.setResults = this.setResults.bind(this);
    this.state = {
      movieDetails: null,
      historyPosters: [],
      searchResults: [],
    };
  }

  setResults(searchResults) {
    this.setState({ searchResults: searchResults });
  }

  selectMovie(id) {
    if (!id) {
      return;
    }
    this.setState({ id: id });
    const detailsUrl = `http://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}`;

    fetch(detailsUrl).then(response => response.json())
                     .then(details => {
                        const imageSource = details.poster_path ? `${imageBaseUrl}w500${details.poster_path}` : null;
                        if (imageSource) {
                          let newHistoryPosters = [imageSource, ...this.state.historyPosters].slice(0, 12);
                          this.setState({ historyPosters: newHistoryPosters });
                        }
                     });
  }

  render() {
    console.log(this.state.searchResults);
    let movieDetails = this.state.id ? (<MovieDetailsContainer id={this.state.id} />) : null;
    let searchResults = this.state.searchResults.map((result, index) => <MovieCard selectMovie={this.selectMovie} key={index} {...result} />);
    return (
      <div>
        <Search setResults={(result) => this.setResults(result)} />
        <div className="row">
          <div className="col s6">
            <div className="row">
            {searchResults}
          </div>
          <div className="row">
            <UpcomingMovieList selectMovie={(id) => this.selectMovie(id)} />
            </div>
          </div>
          <div className="col s6">
            {movieDetails}
          </div>
        </div>
        <div className="row">
          <MovieHistory posters={this.state.historyPosters} />
        </div>
      </div>
    );
  }
}
