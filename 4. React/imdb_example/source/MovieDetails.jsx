import React, { PropTypes } from 'react';
import 'whatwg-fetch';
import { tmdbApiKey, youtubeBaseUrl } from './../settings';

function MovieDetails(props) {
    let video = props.videoUrl ? (
        <iframe width="560" height="315" src={props.videoUrl} frameborder="0" allowfullscreen></iframe>
      ) : null;
    let actors = props.cast.map(member => (
      <tr key={member.id}>
        <td>{member.name}</td>
        <td>{member.character}</td>
      </tr>
    ))
    return (
      <div className="data-wrapper">
        <h3>{props.details.title}</h3>
        <hr />
        <br />
        <div className="valign-wrapper">
          <i className="material-icons">grade</i>
          <b className="left-offset-5">Vote Average:</b>&nbsp;
          {props.details.vote_average}
        </div>
        <br />
        <div className="valign-wrapper">
          <i className="material-icons">face</i>
          <b className="left-offset-5">Vote Count:</b>&nbsp;
          {props.details.vote_count}
        </div>
        <br />
        <hr />
        <br />
        <div className="video-wrapper">
          {video}
        </div>
        <br />
        <hr />
        <h5>Overview</h5>
        <p>{props.details.overview}</p>
        <br />
        <hr />
        <h5>Cast</h5>
        <table className="striped">
          <thead>
            <tr>
              <th>Actor</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {actors}
          </tbody>
        </table>
      </div>
    );
  }



export default MovieDetails;
