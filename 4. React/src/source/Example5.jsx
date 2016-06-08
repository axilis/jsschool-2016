'use strict';
import React, { PropTypes } from 'react';

const style = {
  height: '100px',
  width: '400px',
  fontSize: '30px'
};

class Button extends React.Component {
  render() {
    return (
      <button {...this.props} style={style}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

class Example5 extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = this.displayName.bind(this);
    this.state = {
      name: '',
      nameToShow: ''
    };
  }

  displayName() {
    this.setState({ nameToShow: this.state.name })
  }
  render() {
    return (
      <div>
        <input style={{ width: 400, height: 50, fontSize: 30 }} type="text" ref="name"
          onChange={(e) => this.setState({ name: e.target.value })} />
        <br />
        <Button onClick={this.displayName}>Ok</Button>
        <p>Pozdrav, {this.state.nameToShow}</p>
      </div>
    );
  }
}

export default Example5;
