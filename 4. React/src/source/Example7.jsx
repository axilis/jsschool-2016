'use strict';
import React from 'react';

const Stateless = (props) => (<p>Pozdrav {props.name}</p>);

function Stateless2({ place, duration }) {
  return (
    <p>U {place} jos {duration} minuta</p>
  );
}

const trollface = 'https://upload.wikimedia.org/wikipedia/commons/7/73/Trollface.png';
class Example7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letsTroll: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ letsTroll: true }), 5000);
  }

  render() {
    const trollImage = this.state.letsTroll ? <img src={trollface} /> : null;
    return (
      <div>
        <Stateless name="JSSchool" />
        <Stateless2 place="Hub385" duration={10} />
        {trollImage}
      </div>
    );
  }
}

export default Example7;
