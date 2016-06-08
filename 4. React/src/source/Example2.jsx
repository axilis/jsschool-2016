'use strict';
import React from 'react';

class Example2 extends React.Component {
  render() {
    return (
      <Example2Child stuff={this.state.name} />
    );
  }
}

class Example2Child extends React.Component {
  render() {
    return (
      <div>{this.props.stuff}</div>
    )
  }
}

export default Example2;
