'use strict';
import React from 'react';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

class MyLink extends React.Component {
  render() {
    return (
      <Link {...this.props} style={{color: 'black', fontSize: 30, margin: 10}} />
    );
  }
}

class Yellow extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'yellow' }}>
        <MyLink to="/orange">Orange</MyLink>
        <MyLink to="/red">Red</MyLink>
        <MyLink to="/color/purple">Purple</MyLink>
        <MyLink to="/invalidLink">Invalid link</MyLink>
      </div>
    );
  }
}

class Orange extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'orange' }}>
        <MyLink to="/">Yellow</MyLink>
        <MyLink to="/red">Red</MyLink>
        {this.props.children}
      </div>
    );
  }
}

class Red extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: 'red' }}>
        <MyLink to="/">Yellow</MyLink>
        <MyLink to="/orange">Orange</MyLink>
        <MyLink to="/red/dark">Dark</MyLink>
        <MyLink to="/red/light">Light</MyLink>
        {this.props.children}
      </div>
    );
  }
}

class Multicolor extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: this.props.routeParams.color }}>
        <MyLink to="/">Yellow</MyLink>
        <MyLink to="/orange">Orange</MyLink>
        <MyLink to="/red/dark">Dark</MyLink>
        <MyLink to="/red/light">Light</MyLink>
        {this.props.children}
      </div>
    );
  }
}

class DarkRed extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#770000' }}>
        <MyLink to="/">Yellow</MyLink>
        <MyLink to="/orange">Orange</MyLink>
        {this.props.children}
      </div>
    );
  }
}

class LightRed extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#ff6666' }}>
        <MyLink to="/">Yellow</MyLink>
        <MyLink to="/orange">Orange</MyLink>
        {this.props.children}
      </div>
    );
  }
}

class Example8 extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={null}>
          <IndexRoute component={Yellow} />
          <Route path="orange" component={Orange} />
          <Route path="red" component={Red}>
            <Route path="light" components={LightRed} />
            <Route path="dark" component={DarkRed} />
          </Route>
          <Route path="/color/:color" component={Multicolor} />
          <Route path="*" component={DarkRed} />
        </Route>
      </Router>
    );
  }
}

export default Example8;
