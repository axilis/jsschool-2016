import React, { PropTypes } from 'react';
import { imageBaseUrl } from './../settings';

export default function MovieCard({ id, title, poster_path, selectMovie }) {
  const imageSource = poster_path ? `${imageBaseUrl}w500${poster_path}` : null;
  const image = imageSource ? <img src={imageSource} alt={title} /> : null;
  return (
    <div className="col s6 m4">
      <div className="card">
        <div className="card-image">
          {image}
        </div>
        <div className="card-content">
          <p>{title}</p>
        </div>
        <div className="card-action">
          <a onClick={(event) => { event.preventDefault(); selectMovie(id); }} href="#">Details</a>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};
