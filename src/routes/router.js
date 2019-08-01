import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../components/history';
 
import Login from '../components/login';
import Register from '../components/register';
import Main from '../components/main'; 

 
class MRoute extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/main" component={Main}/>
        </Switch>
      </Router>
    );
  }
}
 
export default MRoute;
