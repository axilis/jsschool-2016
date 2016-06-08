'use strict';
import React from 'react';

const superheroes = ['Iron Man', 'Hulk', 'Thor'];

class List extends React.Component {
  render() {
    let list = superheroes.map((hero, index) => <Item key={index}>{hero}</Item>);
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.children}
      </li>
    )
  }
}

export default List;
