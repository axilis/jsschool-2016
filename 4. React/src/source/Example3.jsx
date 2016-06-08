'use strict';
import React from 'react';

class Example3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Hub385'
    }
  }

  render() {
    return (
      <div>
        {this.state.place}
      </div>
    );
  }
}

export default Example3;
