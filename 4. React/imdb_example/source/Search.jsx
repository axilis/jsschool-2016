import React from 'react';
import _ from 'lodash';
import 'whatwg-fetch';
import { tmdbApiKey } from './../settings';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      values: [],
    };
  }

  onClick() {
    this.search(this.refs.query.value);
  }

  search(query) {
    if (!query || !query.length || query.length < 3) {
      return;
    }
    const url = `http://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${query}`
    console.log(url);
    fetch(url).then(response => response.json()).then(movies => this.props.setResults(movies.results));
  }

  render() {
    return (
      <div className="row">
        <div className="valign-wrapper">
          <div className="col s4 valign">
            <input ref="query" type="text" />
          </div>
          <div className="col s2">
            <a onClick={this.onClick} style={{ width: '180px' }} className="waves-effect waves-light btn valign">
              <i className="material-icons left">search</i>
              Search
            </a>
          </div>
          <div className="col s6"></div>
        </div>
      </div>
    );
  }
}
