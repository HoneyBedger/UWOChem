import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './header';
import HomePage from './homePage';
import Practice1301 from './practice1301';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/practice1301" component={Practice1301} />
          <Redirect to="/home"/>
        </Switch>
      </div>
    );
  }
}
export default Main;
