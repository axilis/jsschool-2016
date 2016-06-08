import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import MovieCard from './MovieCard';
import { tmdbApiKey } from './../settings';

class UpcomingMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const url = `http://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbApiKey}`;
    fetch(url).then(response => response.json())
              .then(movies => this.setState({ movies: movies.results }));
  }

  render() {
    const movieList = this.state.movies.map(movie => (<MovieCard
                                         selectMovie={this.props.selectMovie}
                                         key={movie.id} {...movie}
                                       />));
    return (
      <div className="row">
        {movieList}
      </div>
    );
  }
}

UpcomingMovieList.propTypes = {
  selectMovie: PropTypes.func.isRequired,
};

export default UpcomingMovieList;
