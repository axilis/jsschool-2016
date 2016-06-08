'use strict';
import React from 'react';

class MovieHistory extends React.Component {
  render() {
    const movies = this.props.posters.map((poster, index) => (
      <div key={index} className="col s2 m1">
        <img src={poster} className="responsive-img historyImage" />
      </div>
    ));
    console.log(movies);
    return (
      <div>
        <div className="history-title-wrapper">
          <h5>History</h5>
          <hr />
        </div>
        <br />
        <div className="row">
          {movies}
        </div>
      </div>
    );
  }
}

export default MovieHistory;
