'use strict';
import React, { PropTypes } from 'react';

class Example4 extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      number: 0,
      person: {
        name: 'Damir'
      }
    }
  }

  onClick() {
    this.setState({ number: this.state.number + 1 });

  }

  render() {
    const lifecycle = this.state.number < 5 ? <Lifecycle /> : null;
    return (
      <div>
        <button onClick={this.onClick}>Change state</button>
        {lifecycle}
      </div>
    )
  }
}

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.props.number}
      </div>
    );
  }
}

Lifecycle.defaultProps = {
  number: 0
};

Lifecycle.propTypes = {
  number: PropTypes.number.isRequired
};

export default Example4;
